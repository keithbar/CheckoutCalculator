import { STATE_TAX } from "./taxes";
import { calculateGrossFromNet } from "./calculateTaxes";

function getApyFromAge(age, startingAge){
    const APY_YOUNG = 1.055;
    const APY_RETIRING = 1.05;
    const APY_ELDERLY = 1.04;
    const APY_DYING = 1.03;
    const APY_DISASTER = 1.0;

    let ageDifference = age - startingAge;
    if(ageDifference < 10){
        return APY_DISASTER;
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
    leftover
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
        let apy = getApyFromAge(age, currentAge);
        fundsRemaining = fundsRemaining / apy + spendingPlusTaxes;
        console.log("At age " + age + ", $" + fundsRemaining + " remain, after spending $" + maxAnnualSpending + " and paying $" + (spendingPlusTaxes - maxAnnualSpending) + " in taxes");
    }

    // B: spending shifts from lowest to highest
    let totalAnnualSpendingDifference = maxAnnualSpending - annualSpending;
    let spendingAgeDifference = healthDeclineMaxAge - healthDeclineStartAge + 1;
    let annualSpendingChange = totalAnnualSpendingDifference / spendingAgeDifference;
    console.log("Annual Spending Change: $" + annualSpendingChange)
    for(let age = healthDeclineMaxAge - 1; age >= healthDeclineStartAge; age--){
        let spending = annualSpending + annualSpendingChange * (age - healthDeclineStartAge + 1);
        let spendingPlusTaxes = calculateGrossFromNet(selectedState, spending);
        let apy = getApyFromAge(age, currentAge);
        fundsRemaining = fundsRemaining / apy + spendingPlusTaxes;
        console.log("At age " + age + ", $" + fundsRemaining + " remain, after spending $" + spending + " and paying $" + (spendingPlusTaxes - spending) + " in taxes");    }

    // A: current spending
    for(let age = healthDeclineStartAge - 1; age >= currentAge; age--){
        let spendingPlusTaxes = calculateGrossFromNet(selectedState, annualSpending);
        let apy = getApyFromAge(age, currentAge);
        fundsRemaining = fundsRemaining / apy + spendingPlusTaxes;
        console.log("At age " + age + ", $" + fundsRemaining + " remain, after spending $" + annualSpending + " and paying $" + (spendingPlusTaxes - annualSpending) + " in taxes");    }

    return fundsRemaining;
}