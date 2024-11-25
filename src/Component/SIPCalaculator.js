import React, { useState } from "react";
import "../Style/SIPCalculator.css";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [rateOfReturn, setRateOfReturn] = useState("");
  const [duration, setDuration] = useState("");
  const [results, setResults] = useState(null);

  const calculateSIP = () => {
    const principal = monthlyInvestment * duration * 12;
    const rate = rateOfReturn / 100 / 12;
    const months = duration * 12;
    const maturityValue =
      (monthlyInvestment * ((1 + rate) ** months - 1) * (1 + rate)) / rate;

    setResults({
      investedAmount: principal.toFixed(2),
      estimatedReturns: (maturityValue - principal).toFixed(2),
      maturityAmount: maturityValue.toFixed(2),
    });
  };

  return (
    <section className="calculator" id="calculator">
      <h2>SIP Calculator</h2>
      <div className="form">
        <label>
          Monthly Investment (₹):
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
          />
        </label>
        <label>
          Expected Return Rate (%):
          <input
            type="number"
            value={rateOfReturn}
            onChange={(e) => setRateOfReturn(e.target.value)}
          />
        </label>
        <label>
          Investment Duration (Years):
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </label>
        <button onClick={calculateSIP}>Calculate</button>
      </div>
      {results && (
        <div className="results">
          <h3>Results</h3>
          <p>Total Invested Amount: ₹{results.investedAmount}</p>
          <p>Estimated Returns: ₹{results.estimatedReturns}</p>
          <p>Maturity Amount: ₹{results.maturityAmount}</p>
        </div>
      )}
    </section>
  );
};

export default SIPCalculator;
