export const MARKET_SCENARIOS = {
    smooth: {
        label: "Smooth sailing (steady growth; optimistic)",
        rate: 1.05,
        proportion: 0.15
    },
    rough: {
        label: "Rough start (little growth in early years; more grounded)",
        rate: 1.0,
        proportion: 0.15
    },
    catastrophic: {
        label: "Catastrophic (market losses in early years; conservative)",
        rate: 0.95,
        proportion: 0.2
    }
}