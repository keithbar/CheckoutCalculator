# Checkout Calculator: Can you check out?

A browser-based retirement planning tool that estimates the lump sum principal required to fund your current lifestyle for the rest of your life.

This calculator models annual spending, increasing late-life healthcare costs, taxes, market return scenarios, and inheritance goals to estimate how much capital would be required to retire today.

The tool can be accessed at the following URL:

`TODO: add URL`

## How it works

This app:
- Projects yearly spending from current age to projected death
- Gradually increases spending at user-defined intervals to simulate age-related healthcare costs
- Applies state and federal tax assumptions
- Simulates different market return scenarios (optimistic, average, pessimistic)
- Works backward to determine the minimum principal required today

## Tech stack

- React (functional components and hooks)
- Vite (build tool and dev server)
- JavaScript (ES6+)
- CSS

Fully client-side; no backend or database.

## Assumptions and limitations

This tool:
- Does not model inflation separately (all values are assumed in today's dollars, with market returns adjusted accordingly)
- Uses simplified tax and return assumptions
- Does not provide financial advice

## Running locally

If you'd like to run it locally yourself:

```bash
npm install
npm run dev
```

Then open the local development URL shown in your terminal.