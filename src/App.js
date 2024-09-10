import React, { useState } from "react";
import './App.css';

function App() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalSavings, setTotalSavings] = useState(null);
  const [bedAndBreakfast, setBedAndBreakfast] = useState(false);
  const [shuttleService, setShuttleService] = useState(false);

  const handleCalculate = (e) => {
    e.preventDefault();

    if (!startDate || !endDate) {
      alert('Please select both start and end dates.');
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let savings = diffDays * 25; // Each day saves $25

    // Add costs for Bed and Breakfast and Shuttle Service
    if (bedAndBreakfast) savings += 100;
    if (shuttleService) savings += 35;

    setTotalSavings(savings);
  };

  return (
    <div className="app-container">
      <h1>Free Parking Calculator</h1>
      <img
        src="free-parking.png"
        alt="Free Parking Logo"
        className="free-parking-logo"
      />
      <form className="parking-form" onSubmit={handleCalculate}>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label>

        {/* Bed and Breakfast Styled Checkbox */}
        <div className="checkbox-container">
          <label className="checkbox-label">Bed and Breakfast (+$100)</label>
          <input
            type="checkbox"
            id="bedAndBreakfast"
            className="checkbox-input"
            checked={bedAndBreakfast}
            onChange={(e) => setBedAndBreakfast(e.target.checked)}
          />
          <span className="checkbox"></span>
        </div>

        {/* Shuttle Service Styled Checkbox */}
        <div className="checkbox-container">
          <label className="checkbox-label">Shuttle Service (+$35)</label>
          <input
            type="checkbox"
            id="shuttleService"
            className="checkbox-input"
            checked={shuttleService}
            onChange={(e) => setShuttleService(e.target.checked)}
          />
          <span className="checkbox"></span>
        </div>

        <button type="submit">Calculate Savings</button>
      </form>

      {totalSavings !== null && (
        <div className="savings-result">
          <h2>Total Savings: ${totalSavings}</h2>
        </div>
      )}

<h2>Sign Up</h2>
      <form action="https://formspree.io/f/xwpezznw" method="POST" className="contact-form">
        <div>
          <label>Your Name:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Your Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Enter start/end dates, make and model.</label>
          <textarea name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div> 
  );
}

export default App;
