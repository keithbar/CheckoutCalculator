import { useState } from 'react';
import { calculateRequiredPrincipal } from './utils/calculations';
import './App.css';

function App() {
  const [annualSpending, setAnnualSpending] = useState(40000);
  const [realReturn, setRealReturn] = useState(0.05);
  const [years, setYears] = useState(30);

  const result = calculateRequiredPrincipal({
    annualSpending,
    realReturn,
    years
  });

  return(
    <div>
      <h1>Checkout Calculator</h1>

      <input
        type="number"
        value={annualSpending}
        onChange={(e) => setAnnualSpending(Number(e.target.value))}
      />

      <p>Required Principal: ${result.toFixed(0)}</p>
    </div>
  );
}

export default App
