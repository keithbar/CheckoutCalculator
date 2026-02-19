export function calculateRequiredPrincipal({
    annualSpending,
    realReturn,
    years
}) {
    const r = realReturn;
    const n = years;

    if(r === 0){
        return annualSpending * n;
    }

    return(
        annualSpending *
        (1 - Math.pow(1 + r, -n)) /
        r
    );
}