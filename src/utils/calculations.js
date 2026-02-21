export function calculateRequiredPrincipal({
    currentAge,
    projectedAge,
    annualSpending,
    healthDeclineStartAge,
    healthDeclineMaxAge,
    maxAnnualSpending
}) {
    const APY = 1.07;
    // Work backwards
    // Three sections:
    //// A: current spending
    //// B: spending increasing
    //// C: spending at its highest

    let fundsRemaining = 0;

    // C: spending at its highest
    for(let age = projectedAge; age >= healthDeclineMaxAge; age--){
        fundsRemaining = fundsRemaining / APY + maxAnnualSpending;
        console.log("At age " + age + ", $" + fundsRemaining + " remain, after spending $" + maxAnnualSpending + ".");
    }

    // B: spending shifts from lowest to highest
    let totalAnnualSpendingDifference = maxAnnualSpending - annualSpending;
    let spendingAgeDifference = healthDeclineMaxAge - healthDeclineStartAge + 1;
    let annualSpendingChange = totalAnnualSpendingDifference / spendingAgeDifference;
    console.log("Annual Spending Change: $" + annualSpendingChange)
    for(let age = healthDeclineMaxAge - 1; age >= healthDeclineStartAge; age--){
        let spending = annualSpending + annualSpendingChange * (age - healthDeclineStartAge + 1);
        fundsRemaining = fundsRemaining / APY + spending;
        console.log("At age " + age + ", $" + fundsRemaining + " remain, after spending $" + spending + ".");
    }

    // A: current spending
    for(let age = healthDeclineStartAge - 1; age >= currentAge; age--){
        fundsRemaining = fundsRemaining / APY + annualSpending;
        console.log("At age " + age + ", $" + fundsRemaining + " remain, after spending $" + annualSpending + ".");
    }

    return fundsRemaining;
}