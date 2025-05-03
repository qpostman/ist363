// src/components/Interview.js
import React, { useState } from 'react';

function Interview() {
  const [thankYouMessage, setThankYouMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const sport = e.target.sport.value;
    const team = e.target.team.value;
    const stadium = e.target.stadium.value;

    // Store preferences in localStorage
    localStorage.setItem("sport", sport);
    localStorage.setItem("team", team);
    localStorage.setItem("stadium", stadium);

    setThankYouMessage(true);

    setTimeout(() => {
      window.location.href = "/matches";
    }, 1500);
  };

  return (
    <div>
      <h1>Interview Questions</h1>
      <form onSubmit={handleSubmit}>
        <label>Favorite Sport:<br/>
          <input type="text" name="sport" required />
        </label><br/>
        <label>Favorite Team:<br/>
          <input type="text" name="team" required />
        </label><br/>
        <label>Dream Stadium to Visit:<br/>
          <input type="text" name="stadium" required />
        </label><br/>
        <button type="submit">Submit</button>
      </form>

      {thankYouMessage && <p>Answers saved! Proceed to your matches.</p>}
      <footer>© 2025 StadiumScore. All rights reserved.</footer>
    </div>
  );
}

export default Interview;
