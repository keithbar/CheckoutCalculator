import { useState } from 'react';
import { calculateRequiredPrincipal } from './utils/calculations';
import CurrencyInput from 'react-currency-input-field';
import './App.css';

function App() {
  const [currentAge, setCurrentAge] = useState(30);
  const [projectedAge, setProjectedAge] = useState(80);
  const [annualSpending, setAnnualSpending] = useState(40000);
  const [healthDeclineStartAge, setHealthDeclineStartAge] = useState(65);
  const [healthDeclineMaxAge, setHealthDeclineMaxAge] = useState(75);
  const [maxAnnualSpending, setMaxAnnualSpending] = useState(80000);

  const result = calculateRequiredPrincipal({
    currentAge,
    projectedAge,
    annualSpending,
    healthDeclineStartAge,
    healthDeclineMaxAge,
    maxAnnualSpending
  });

  return(
    <div>
      <h1>Checkout Calculator</h1>

      <form className="calculator-form">
        
        <div className="form-group">
          <label htmlFor="current-age">
            How old are you now?
          </label>
          <input
            id="current-age"
            type="number"
            min="0"
            value={currentAge}
            onChange={(e) => setCurrentAge(Number(e.target.value))}
          />
          <small className="helper-text">
            Enter your current age in years.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="projected-age">
            To what age do you expect to live?
          </label>
          <input
            id="projected-age"
            type="number"
            min={currentAge}
            value={projectedAge}
            onChange={(e) => setProjectedAge(Number(e.target.value))}
          />
          <small className="helper-text">
            When do you expect to die? Consider health, lifestyle, and family history.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="annual-spending">
            What is your annual spending?
          </label>
          <CurrencyInput
            id="annual-spending"
            value={annualSpending}
            onValueChange={(value, name, values) =>
              setAnnualSpending(values?.float ?? 0)
            }
            intlConfig={{ locale: "en-US", currency: "USD" }}
            decimalsLimit={0}
            allowNegativeValue={false}
          />
          <small className="helper-text">
            In today's dollars, how much do you expect to spend annually if you maintain your current lifestyle?
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="health-decline-start-age">
            At what age do you expect your cost of living to increase?
          </label>
          <input
            id="health-decline-start-age"
            type="number"
            min={currentAge}
            value={healthDeclineStartAge}
            onChange={(e) => setHealthDeclineStartAge(Number(e.target.value))}
          />
          <small className="helper-text">
            Consider increased cost of health care with age.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="health-decline-max-age">
            At what age do you expect your cost of living to be at its highest?
          </label>
          <input
            id="health-decline-max-age"
            type="number"
            min={healthDeclineStartAge}
            value={healthDeclineMaxAge}
            onChange={(e) => setHealthDeclineMaxAge(Number(e.target.value))}
          />
          <small className="helper-text">
            Consider late-life lifestyle changes, such as assisted living care.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="max-annual-spending">
            What do you expect your annual spending (in today's dollars) to be at its peak?
          </label>
          <CurrencyInput
            id="max-annual-spending"
            min={annualSpending}
            value={maxAnnualSpending}
            onValueChange={(value, name, values) =>
              setMaxAnnualSpending(values?.float ?? 0)
            }
            intlConfig={{ locale: "en-US", currency: "USD" }}
            decimalsLimit={0}
            allowNegativeValue={false}
          />
          <small className="helper-text">
            Consider the costs of late-life services, such as in-home care or assisted living.
          </small>
        </div>

      </form>

      <p>Required Principal: ${result.toLocaleString()}</p>
    </div>
  );
}

export default App
