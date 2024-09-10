import React, { useState } from "react";
import './App.css';

function App() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [savings, setSavings] = useState(null);
  const costPerDay = 25;

  const calculateSavings = (e) => {
    e.preventDefault();

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start && end && start <= end) {
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // including the start date
      const totalSavings = diffDays * costPerDay;
      setSavings(totalSavings);
    } else {
      setSavings(null);
      alert("Please enter valid dates.");
    }
  };

  return (
    <div className="app-container">
      <h1>Free Parking at Rich Dad's Rolling Hills Hotel</h1>
      <img src="/free-parking.png" alt="Free Parking Logo" className="free-parking-logo" />
      <form className="parking-form" onSubmit={calculateSavings}>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate Savings</button>
      </form>

      {savings !== null && (
        <div className="savings-result">
          <h2>Total Savings: ${savings}</h2>
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
