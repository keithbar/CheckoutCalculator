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
} // Federal tax data pulled from:
  // https://www.irs.gov/filing/federal-income-tax-rates-and-brackets

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

    "Idaho": {
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
    },

    "Kansas": {
        brackets: [
            { upTo: 23000, rate: 0.052 },
            { upTo: Infinity, rate: 0.0558 }
        ]
    },

    "Kentucky": {
        brackets: [
            { upTo: Infinity, rate: 0.035 }
        ]
    },

    "Louisiana": {
        brackets: [
            { upTo: Infinity, rate: 0.03 }
        ]
    },

    "Maine": {
        brackets: [
            { upTo: 27399, rate: 0.058 },
            { upTo: 64849, rate: 0.0675 },
            { upTo: Infinity, rate: 0.0715 }
        ]
    },

    "Maryland": {
        brackets: [
            { upTo: 1000, rate: 0.02 },
            { upTo: 2000, rate: 0.03 },
            { upTo: 3000, rate: 0.04 },
            { upTo: 100000, rate: 0.0475 },
            { upTo: 125000, rate: 0.05 },
            { upTo: 150000, rate: 0.0525 },
            { upTo: 250000, rate: 0.055 },
            { upTo: 500000, rate: 0.0575 },
            { upTo: 1000000, rate: 0.0625 },
            { upTo: Infinity, rate: 0.065 }
        ]
    },

    "Massachusetts": {
        brackets: [
            { upTo: 1083150, rate: 0.05 },
            { upTo: Infinity, rate: 0.09 }
        ]
    },

    "Michigan": {
        brackets: [
            { upTo: Infinity, rate: 0.0425 }
        ]
    },

    "Minnesota": {
        brackets: [
            { upTo: 33310, rate: 0.0535 },
            { upTo: 109430, rate: 0.068 },
            { upTo: 203150, rate: 0.0785 },
            { upTo: Infinity, rate: 0.0985 }
        ]
    },

    "Mississippi": {
        brackets: [
            { upTo: 10000, rate: 0.0 },
            { upTo: Infinity, rate: 0.04 }
        ]
    },

    "Missouri": {
        brackets: [
            { upTo: 1348, rate: 0.0 },
            { upTo: 2696, rate: 0.02 },
            { upTo: 4044, rate: 0.025 },
            { upTo: 5392, rate: 0.03 },
            { upTo: 6740, rate: 0.035 },
            { upTo: 8088, rate: 0.04 },
            { upTo: 9436, rate: 0.045 },
            { upTo: Infinity, rate: 0.047 }
        ]
    },

    "Montana": {
        brackets: [
            { upTo: 47500, rate: 0.047 },
            { upTo: Infinity, rate: 0.0565 }
        ]
    },

    "Nebraska": {
        brackets: [
            { upTo: 4130, rate: 0.0246 },
            { upTo: 24760, rate: 0.0351 },
            { upTo: Infinity, rate: 0.0455 }
        ]
    },

    "Nevada": {
        brackets: [
            { upTo: Infinity, rate: 0.0 }
        ]
    },

    "New Hampshire": {
        brackets: [
            { upTo: Infinity, rate: 0.0 }
        ]
    },

    "New Jersey": {
        brackets: [
            { upTo: 20000, rate: 0.014 },
            { upTo: 35000, rate: 0.0175 },
            { upTo: 40000, rate: 0.035 },
            { upTo: 75000, rate: 0.0553 },
            { upTo: 500000, rate: 0.0637 },
            { upTo: 1000000, rate: 0.0897 },
            { upTo: Infinity, rate: 0.1075 }
        ]
    },

    "New Mexico": {
        brackets: [
            { upTo: 5500, rate: 0.015 },
            { upTo: 16500, rate: 0.032 },
            { upTo: 33500, rate: 0.043 },
            { upTo: 66500, rate: 0.047 },
            { upTo: 210000, rate: 0.049 },
            { upTo: Infinity, rate: 0.059 }
        ]
    },

    "New York": {
        brackets: [
            { upTo: 8500, rate: 0.039 },
            { upTo: 11700, rate: 0.044 },
            { upTo: 13900, rate: 0.0515 },
            { upTo: 80650, rate: 0.054 },
            { upTo: 215400, rate: 0.059 },
            { upTo: 1077550, rate: 0.0685 },
            { upTo: 5000000, rate: 0.0965 },
            { upTo: 25000000, rate: 0.103 },
            { upTo: Infinity, rate: 0.109 }
        ]
    },

    "North Carolina": {
        brackets: [
            { upTo: Infinity, rate: 0.0399 }
        ]
    },

    "North Dakota": {
        brackets: [
            { upTo: 48475, rate: 0.0 },
            { upTo: 244825, rate: 0.0195 },
            { upTo: Infinity, rate: 0.025 }
        ]
    },

    "Ohio": {
        brackets: [
            { upTo: 26050, rate: 0.0 },
            { upTo: Infinity, rate: 0.0275 }
        ]
    },

    "Oklahoma": {
        brackets: [
            { upTo: 3750, rate: 0.0 },
            { upTo: 4900, rate: 0.025 },
            { upTo: 7200, rate: 0.035 },
            { upTo: Infinity, rate: 0.045 }
        ]
    },

    "Oregon": {
        brackets: [
            { upTo: 4550, rate: 0.0475 },
            { upTo: 11400, rate: 0.0675 },
            { upTo: 125000, rate: 0.0875 },
            { upTo: Infinity, rate: 0.099 }
        ]
    },

    "Pennsylvania": {
        brackets: [
            { upTo: Infinity, rate: 0.0307 }
        ]
    },

    "Rhode Island": {
        brackets: [
            { upTo: 82050, rate: 0.0375 },
            { upTo: 186450, rate: 0.0475 },
            { upTo: Infinity, rate: 0.0599 }
        ]
    },

    "South Carolina": {
        brackets: [
            { upTo: 3640, rate: 0.0 },
            { upTo: 18230, rate: 0.03 },
            { upTo: Infinity, rate: 0.06 }
        ]
    },

    "South Dakota": {
        brackets: [
            { upTo: Infinity, rate: 0.0 }
        ]
    },

    "Tennessee": {
        brackets: [
            { upTo: Infinity, rate: 0.0 }
        ]
    },

    "Texas": {
        brackets: [
            { upTo: Infinity, rate: 0.0 }
        ]
    },

    "Utah": {
        brackets: [
            { upTo: Infinity, rate: 0.045 }
        ]
    },

    "Vermont": {
        brackets: [
            { upTo: 49400, rate: 0.0335 },
            { upTo: 119700, rate: 0.066 },
            { upTo: 249700, rate: 0.076 },
            { upTo: Infinity, rate: 0.0875 }
        ]
    },

    "Virginia": {
        brackets: [
            { upTo: 3000, rate: 0.02 },
            { upTo: 5000, rate: 0.03 },
            { upTo: 17000, rate: 0.05 },
            { upTo: Infinity, rate: 0.0575 }
        ]
    },

    "Washington": {
        brackets: [
            { upTo: 1000000, rate: 0.07 },
            { upTo: Infinity, rate: 0.09 }
        ]
    },

    "West Virginia": {
        brackets: [
            { upTo: 10000, rate: 0.0222 },
            { upTo: 25000, rate: 0.0296 },
            { upTo: 40000, rate: 0.0333 },
            { upTo: 60000, rate: 0.0444 },
            { upTo: Infinity, rate: 0.0482 }
        ]
    },

    "Wisconsin": {
        brackets: [
            { upTo: 15110, rate: 0.035 },
            { upTo: 51950, rate: 0.044 },
            { upTo: 332720, rate: 0.053 },
            { upTo: Infinity, rate: 0.0765 }
        ]
    },

    "Wyoming": {
        brackets: [
            { upTo: Infinity, rate: 0.0 }
        ]
    },

    "Washington, DC": {
        brackets: [
            { upTo: 10000, rate: 0.04 },
            { upTo: 40000, rate: 0.06 },
            { upTo: 60000, rate: 0.065 },
            { upTo: 250000, rate: 0.085 },
            { upTo: 500000, rate: 0.0925 },
            { upTo: 1000000, rate: 0.0975 },
            { upTo: Infinity, rate: 0.1075 }
        ]
    }

} // State tax data pulled from:
  // https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/