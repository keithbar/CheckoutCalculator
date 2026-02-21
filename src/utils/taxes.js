export const FEDERAL_TAX = {
    brackets: [
        { upTo: 11925, rate: 0.1 },
        { upTo: 48475, rate: 0.12 },
        { upTo: 103350, rate: 0.22 },
        { upTo: 197300, rate: 0.24 },
        { upTo: 250525, rate: 0.32 },
        { upTo: 626350, rate: 0.35 },
        { upTo: Infinity, rate: 0.37 }
    ]
}

export const STATE_TAX = {

    "Alabama": {
        brackets: [
            { upTo: 500, rate: 0.02 },
            { upTo: 3000, rate: 0.04 },
            { upTo: Infinity, rate: 0.05 }
        ]
    },

    "Alaska": {
        brackets: [
            { upTo: Infinity, rate: 0.0 }
        ]
    },

    "Arizona": {
        brackets: [
            { upTo: Infinity, rate: 0.025 }
        ]
    },

    "Arkansas": {
        brackets: [
            { upTo: 4600, rate: 0.02 },
            { upTo: Infinity, rate: 0.039 }
        ]
    },

    "California": {
        brackets: [
            { upTo: 11079, rate: 0.01 },
            { upTo: 26264, rate: 0.02 },
            { upTo: 41452, rate: 0.04 },
            { upTo: 57542, rate: 0.06 },
            { upTo: 72724, rate: 0.08 },
            { upTo: 371479, rate: 0.093 },
            { upTo: 445771, rate: 0.103 },
            { upTo: 742953, rate: 0.113 },
            { upTo: 1000000, rate: 0.123 },
            { upTo: Infinity, rate: 0.133 }
        ]
    },

    "Colorado": {
        brackets: [
            { upTo: Infinity, rate: 0.044 }
        ]
    },

    "Connecticut": {
        brackets: [
            { upTo: 10000, rate: 0.02 },
            { upTo: 50000, rate: 0.045 },
            { upTo: 100000, rate: 0.055 },
            { upTo: 200000, rate: 0.06 },
            { upTo: 250000, rate: 0.065},
            { upTo: 500000, rate: 0.069 },
            { upTo: Infinity, rate: 0.0699 }
        ]
    },

    "Delaware": {
        brackets: [
            { upTo: 2000, rate: 0.0 },
            { upTo: 5000, rate: 0.022 },
            { upTo: 10000, rate: 0.039 },
            { upTo: 20000, rate: 0.048 },
            { upTo: 25000, rate: 0.052 },
            { upTo: 60000, rate: 0.0555 },
            { upTo: Infinity, rate: 0.066 }
        ]
    },

    "Florida": {
        brackets: [
            { upTo: Infinity, rate: 0.0 }
        ]
    },

    "Georgia": {
        brackets: [
            { upTo: Infinity, rate: 0.0519 }
        ]
    },

    "Hawaii": {
        brackets: [
            { upTo: 9600, rate: 0.014 },
            { upTo: 14400, rate: 0.032 },
            { upTo: 19200, rate: 0.055 },
            { upTo: 24000, rate: 0.064 },
            { upTo: 36000, rate: 0.068 },
            { upTo: 48000, rate: 0.072 },
            { upTo: 125000, rate: 0.076 },
            { upTo: 175000, rate: 0.079 },
            { upTo: 225000, rate: 0.0825 },
            { upTo: 275000, rate: 0.09 },
            { upTo: 325000, rate: 0.1 },
            { upTo: Infinity, rate: 0.11 }
        ]
    },

    "Georgia": {
        brackets: [
            { upTo: 4811, rate: 0.0 },
            { upTo: Infinity, rate: 0.053 }
        ]
    },

    "Illinois": {
        brackets: [
            { upTo: Infinity, rate: 0.0495 }
        ]
    },

    "Indiana": {
        brackets: [
            { upTo: Infinity, rate: 0.0295 }
        ]
    },

    "Iowa": {
        brackets: [
            { upTo: Infinity, rate: 0.038 }
        ]
    }

} // https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/