export const MARKET_SCENARIOS = {
    smooth: {
        label: "Smooth sailing (steady growth)",
        rate: 1.05,
        proportion: 0.15
    },
    rough: {
        label: "Rough start (no growth in early years)",
        rate: 1.0,
        proportion: 0.15
    },
    catastrophic: {
        label: "Catastrophic start (market losses in early years)",
        rate: 0.95,
        proportion: 0.2
    }
}