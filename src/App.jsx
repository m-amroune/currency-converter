import "./App.css";
import { useState, useMemo } from "react";

const rates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7,
};

function App() {
  // Source currency
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");

  // User input amount
  const [amount, setAmount] = useState(1);

  const [to, setTo] = useState("EUR");

  // Recalculate amounts when "from" or "amount" changes
  const convertedAmount = useMemo(() => {
    console.log("recalculation");

    const fromRate = rates[from];
    const baseAmount = amount / fromRate;

    // Currency -> converted amount
    const result = {};
    for (const code in rates) {
      result[code] = baseAmount * rates[code];
    }

    return result;
  }, [from, amount]);

  return (
    <div className="background">
      <div className="modal">
        <h1>Currency Converter</h1>
        <label>USD to EUR Conversion</label>
        <input type="number" />
        <label>Start Currency :</label>
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
          <option>JPY</option>
        </select>
        <label>Target Currency :</label>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
          <option>JPY</option>
        </select>
        <p>Converted Amount : </p>
      </div>
    </div>
  );
}

export default App;
