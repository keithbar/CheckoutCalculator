import { MARKET_SCENARIOS } from "./constants";
import { calculateGrossFromNet } from "./calculateTaxes";

// Flag for printing calculation details to the console.
// Set to true to see all relevant values for each year of retirement.
const DEBUG = false;

function debugPrintInfo(
    age,
    fundsRemaining,
    spending,
    spendingPlusTaxes,
    rate
){
    let apy = (rate - 1) * 100;
    console.log("At age " + age + ", $" + Math.round(fundsRemaining).toLocaleString() + 
        " remain, after spending $" + Math.round(spending).toLocaleString() + " and paying $" + 
        Math.round(spendingPlusTaxes - spending).toLocaleString() + 
        " in taxes. APY for the year: " + apy.toFixed(1) + "%");
}

function getApyFromAge(age, startingAge, projectedAge, marketScenario){
    const APY_YOUNG = 1.055;
    const APY_RETIRING = 1.05;
    const APY_ELDERLY = 1.04;
    const APY_DYING = 1.03;

    let ageDifference = age - startingAge;
    let retirementLength = Math.max(1, projectedAge - startingAge);
    let retirementProgress = ageDifference / retirementLength;
    
    if(retirementProgress < MARKET_SCENARIOS[marketScenario].proportion)
        return MARKET_SCENARIOS[marketScenario].rate;
    else if(retirementProgress < 0.3) return APY_YOUNG;
    else if(retirementProgress < 0.6) return APY_RETIRING;
    else if(retirementProgress < 0.85) return APY_ELDERLY;
    else return APY_DYING;
}

export function calculateRequiredPrincipal({
    currentAge,
    projectedAge,
    annualSpending,
    healthDeclineStartAge,
    healthDeclineMaxAge,
    maxAnnualSpending,
    selectedState,
    leftover,
    marketScenario
}) {
    // Work backwards
    // Three sections:
    //// A: current spending
    //// B: spending increasing
    //// C: spending at its highest

    let fundsRemaining = leftover;

    // C: spending at its highest
    for(let age = projectedAge; age >= healthDeclineMaxAge; age--){
        let spendingPlusTaxes = calculateGrossFromNet(selectedState, maxAnnualSpending);
        let apy = getApyFromAge(age, currentAge, projectedAge, marketScenario);
        fundsRemaining = fundsRemaining / apy + spendingPlusTaxes;
        if(DEBUG) debugPrintInfo(age, fundsRemaining, maxAnnualSpending, spendingPlusTaxes, apy);
    }

    // B: spending shifts from lowest to highest
    let totalAnnualSpendingDifference = maxAnnualSpending - annualSpending;
    let spendingAgeDifference = healthDeclineMaxAge - healthDeclineStartAge + 1;
    let annualSpendingChange = totalAnnualSpendingDifference / spendingAgeDifference;
    for(let age = healthDeclineMaxAge - 1; age >= healthDeclineStartAge; age--){
        let spending = annualSpending + annualSpendingChange * (age - healthDeclineStartAge + 1);
        let spendingPlusTaxes = calculateGrossFromNet(selectedState, spending);
        let apy = getApyFromAge(age, currentAge, projectedAge, marketScenario);
        fundsRemaining = fundsRemaining / apy + spendingPlusTaxes;
        if(DEBUG) debugPrintInfo(age, fundsRemaining, spending, spendingPlusTaxes, apy);
    }

    // A: current spending
    for(let age = healthDeclineStartAge - 1; age >= currentAge; age--){
        let spendingPlusTaxes = calculateGrossFromNet(selectedState, annualSpending);
        let apy = getApyFromAge(age, currentAge, projectedAge, marketScenario);
        fundsRemaining = fundsRemaining / apy + spendingPlusTaxes;
        if(DEBUG) debugPrintInfo(age, fundsRemaining, annualSpending, spendingPlusTaxes, apy);
    }

    return fundsRemaining;
}