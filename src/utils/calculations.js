import { MARKET_SCENARIOS } from "./constants";
import { calculateGrossFromNet } from "./calculateTaxes";

function getApyFromAge(age, startingAge, projectedAge, marketScenario){
    const APY_YOUNG = 1.055;
    const APY_RETIRING = 1.05;
    const APY_ELDERLY = 1.04;
    const APY_DYING = 1.03;

    let ageDifference = age - startingAge;
    let retirementLength = projectedAge - startingAge;
    let marketScenarioYears = MARKET_SCENARIOS[marketScenario].proportion * retirementLength;
    if(ageDifference < marketScenarioYears){
        return MARKET_SCENARIOS[marketScenario].rate;
    }

    if(age < 50) return APY_YOUNG;
    else if(age < 65) return APY_RETIRING;
    else if(age < 80) return APY_ELDERLY;
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
        console.log("At age " + age + ", $" + fundsRemaining + " remain, after spending $" + maxAnnualSpending + " and paying $" + (spendingPlusTaxes - maxAnnualSpending) + " in taxes");
        console.log("      APY for the year: " + apy);
    }

    // B: spending shifts from lowest to highest
    let totalAnnualSpendingDifference = maxAnnualSpending - annualSpending;
    let spendingAgeDifference = healthDeclineMaxAge - healthDeclineStartAge + 1;
    let annualSpendingChange = totalAnnualSpendingDifference / spendingAgeDifference;
    console.log("Annual Spending Change: $" + annualSpendingChange)
    for(let age = healthDeclineMaxAge - 1; age >= healthDeclineStartAge; age--){
        let spending = annualSpending + annualSpendingChange * (age - healthDeclineStartAge + 1);
        let spendingPlusTaxes = calculateGrossFromNet(selectedState, spending);
        let apy = getApyFromAge(age, currentAge, projectedAge, marketScenario);
        fundsRemaining = fundsRemaining / apy + spendingPlusTaxes;
        console.log("At age " + age + ", $" + fundsRemaining + " remain, after spending $" + spending + " and paying $" + (spendingPlusTaxes - spending) + " in taxes");
        console.log("      APY for the year: " + apy);
    }

    // A: current spending
    for(let age = healthDeclineStartAge - 1; age >= currentAge; age--){
        let spendingPlusTaxes = calculateGrossFromNet(selectedState, annualSpending);
        let apy = getApyFromAge(age, currentAge, projectedAge, marketScenario);
        fundsRemaining = fundsRemaining / apy + spendingPlusTaxes;
        console.log("At age " + age + ", $" + fundsRemaining + " remain, after spending $" + annualSpending + " and paying $" + (spendingPlusTaxes - annualSpending) + " in taxes");
        console.log("      APY for the year: " + apy);
    }

    return fundsRemaining;
}