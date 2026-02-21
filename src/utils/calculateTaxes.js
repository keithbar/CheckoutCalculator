import { FEDERAL_TAX, STATE_TAX } from "./taxes";

function calculateTaxesFromBrackets(
    brackets,
    grossIncome
){
    let taxes = 0;

    let previousBracket = 0;
    for(let i = 0; i < brackets.length; i++){
        if(grossIncome > brackets[i].upTo){
            taxes += (brackets[i].upTo - previousBracket) * brackets[i].rate;
        }
        else{
            taxes += (grossIncome - previousBracket) * brackets[i].rate;
            break;
        }
        previousBracket = brackets[i].upTo;
    }

    return taxes;
}

function calculateFederalTaxFromGross(
    grossIncome
){
    return calculateTaxesFromBrackets(FEDERAL_TAX.brackets, grossIncome);
}

function calculateStateTaxFromGross(
    selectedState,
    grossIncome
){
    return calculateTaxesFromBrackets(STATE_TAX[selectedState].brackets, grossIncome);
}

function calculateAllTaxesFromGross(
    selectedState,
    grossIncome
){
    let stateTaxes = calculateStateTaxFromGross(selectedState, grossIncome);
    let federalTaxes = calculateFederalTaxFromGross(grossIncome);
    return stateTaxes + federalTaxes;
}

export function calculateGrossFromNet(
    selectedState,
    netIncome
){
    let low = netIncome;
    let high = netIncome * 2;

    for(let i = 0; i < 15; i++){
        const mid = (low + high) / 2;
        const midNet = mid - calculateAllTaxesFromGross(selectedState, mid);

        if(midNet < netIncome){
            low = mid;
        }
        else{
            high = mid;
        }
    }

    return (low + high) / 2;
}