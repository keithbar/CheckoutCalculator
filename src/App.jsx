import { useEffect, useState } from 'react';
import { calculateRequiredPrincipal } from './utils/calculations';
import CurrencyInput from 'react-currency-input-field';
import { STATE_TAX } from './utils/taxes'
import { MARKET_SCENARIOS } from './utils/constants';
import './App.css';

function App() {
  const [currentAge, setCurrentAge] = useState(30);
  const [projectedAge, setProjectedAge] = useState(80);
  const [annualSpending, setAnnualSpending] = useState(40000);
  const [healthDeclineStartAge, setHealthDeclineStartAge] = useState(65);
  const [healthDeclineMaxAge, setHealthDeclineMaxAge] = useState(75);
  const [maxAnnualSpending, setMaxAnnualSpending] = useState(80000);
  const [selectedState, setSelectedState] = useState("California");
  const [leftover, setLeftover] = useState(10000);
  const [marketScenario, setMarketScenario] = useState("rough");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const stateNames = Object.keys(STATE_TAX);

  // Scroll down after updating results
  useEffect(() => {
    if(result != null){
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [result]);

  function handleCalculate(e){
    e.preventDefault(); // prevent form reload

    // Form validation
    if(projectedAge <= currentAge){
      setError("Age of death must be greater than current age.");
      setResult(null);
      return;
    }

    if(healthDeclineStartAge < currentAge){
      setError("Age of beginning health decline cannot be before current age.");
      setResult(null);
      return;
    }

    if(healthDeclineMaxAge < healthDeclineStartAge){
      setError("Max health decline age must be greater than health decline starting age.");
      setResult(null);
      return;
    }

    if(projectedAge < healthDeclineMaxAge){
      setError("Max health decline age must not be greater than age of death.");
      setResult(null);
      return;
    }

    if(maxAnnualSpending < annualSpending){
      setError("Peak annual spending cannot be less than typical annual spending.");
      setResult(null);
      return;
    }

    setError("");

    const result = calculateRequiredPrincipal({
      currentAge,
      projectedAge,
      annualSpending,
      healthDeclineStartAge,
      healthDeclineMaxAge,
      maxAnnualSpending,
      selectedState,
      leftover,
      marketScenario
    });

    setResult(result);
  }

  return(
    <div>
      <h1>Checkout Calculator</h1>

      <p className="subtitle">
        How much money do you need in order to retire today?
      </p>
      <p className="calculator-information">
        This calculator estimates the principal required to fund your lifestyle for the rest of your life, based on your spending, expected lifespan, projected healthcare costs, and market conditions.
        <br/><br/>
        This tool provides estimates for illustrative purposes only and does not constitute financial advice. All calculations occur within your browser; no information is transmitted or stored.
      </p>

      <form className="calculator-form" onSubmit={handleCalculate}>
        
        <div className="form-group">
          <label htmlFor="current-age">
            How old are you now?
          </label>
          <input
            id="current-age"
            type="number"
            min="0"
            max="120"
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
            max="140"
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
            In today's dollars, how much do you expect to spend annually if you maintain your current lifestyle? Include all spending, including housing, food, healthcare, recreation, etc.
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
            max={projectedAge}
            value={healthDeclineStartAge}
            onChange={(e) => setHealthDeclineStartAge(Number(e.target.value))}
          />
          <small className="helper-text">
            Consider increased cost of health care with age, such as more frequent doctor visits, more frequent medical procedures, and disability-related expenses.
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
            max={projectedAge}
            value={healthDeclineMaxAge}
            onChange={(e) => setHealthDeclineMaxAge(Number(e.target.value))}
          />
          <small className="helper-text">
            Consider late-life lifestyle changes, such as home health care, assisted living, extended hospital stays, and medical equipment.
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
            Consider the costs of late-life services, such as home health care, assisted living, extended hospital stays, and medical equipment.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="selected-state">
            What state do you plan to live in when retired?
          </label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            {stateNames.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <small className="helper-text">
            This will be used to help estimate tax burden of withdrawals.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="leftover">
            How much money would you like to have left over after you die?
          </label>
          <CurrencyInput
            id="leftover"
            value={leftover}
            onValueChange={(value, name, values) =>
              setLeftover(values?.float ?? 0)
            }
            intlConfig={{ locale: "en-US", currency: "USD" }}
            decimalsLimit={0}
            allowNegativeValue={false}
          />
          <small className="helper-text">
            In today's dollars, how much do you want to leave behind when you die, for inheritances, etc.?
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="market-scenario">
            How lucky are you feeling in regards to future market performance?
          </label>
          <select
            id="market-scenario"
            value={marketScenario}
            onChange={(e) => setMarketScenario(e.target.value)}
          >
            {Object.entries(MARKET_SCENARIOS).map(([key, scenario]) => (
              <option key={key} value={key}>
                {scenario.label}
              </option>
            ))}
          </select>
          <small className="helper-text">
            Simulates different market return sequences. Primarily impacts early performance, where effects are more pronounced. The worse the market performance, the more conservative the final estimate will be.
          </small>
        </div>

        <button type="submit">Run Calculation</button>

      </form>

      {error && <p className="error">{error}</p>}

      {result != null && (
        <p className="result">Required Principal: ${Math.round(result).toLocaleString()}</p>
      )}
    </div>
  );
}

export default App
