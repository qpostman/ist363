// src/components/Contact.js
import React, { useState } from 'react';

function Contact() {
  const [thankYouMessage, setThankYouMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect form data
    const name = e.target.name.value;
    const email = e.target.email.value;
    const city = e.target.city.value;
    const country = e.target.country.value;

    // Store contact info in localStorage
    const sport = localStorage.getItem("sport");
    const team = localStorage.getItem("team");
    const stadium = localStorage.getItem("stadium");

    const userData = { name, email, city, country, sport, team, stadium };
    const currentUserNumber = localStorage.getItem("userCount") || 0;
    const newUserNumber = parseInt(currentUserNumber) + 1;

    localStorage.setItem(`user${newUserNumber}`, JSON.stringify(userData));
    localStorage.setItem("userCount", newUserNumber);

    // Show thank you message and redirect to interview
    setThankYouMessage(true);

    setTimeout(() => {
      window.location.href = "/interview";
    }, 1500);
  };

  return (
    <div>
      <h1>Contact Info</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:<br/>
          <input type="text" name="name" required />
        </label><br/>
        <label>Email:<br/>
          <input type="email" name="email" required />
        </label><br/>
        <label>City, State:<br/>
          <input type="text" name="city" required />
        </label><br/>
        <label>Country:<br/>
          <input type="text" name="country" required />
        </label><br/>
        <button type="submit">Submit</button>
      </form>

      {thankYouMessage && <p>Thanks for submitting your info! Proceeding to interview...</p>}
      <footer>© 2025 StadiumScore. All rights reserved.</footer>
    </div>
  );
}

export default Contact;
