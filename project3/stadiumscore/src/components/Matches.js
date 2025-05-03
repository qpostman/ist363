// src/components/Matches.js
import React, { useEffect, useState } from 'react';

function Matches() {
  const [matches, setMatches] = useState([]);
  
  useEffect(() => {
    const currentUser = {
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      city: localStorage.getItem("city"),
      country: localStorage.getItem("country"),
      sport: localStorage.getItem("sport"),
      team: localStorage.getItem("team"),
      stadium: localStorage.getItem("stadium"),
    };

    let users = [];
    let userCount = localStorage.getItem("userCount") || 0;

    // Load users from localStorage
    for (let i = 1; i <= userCount; i++) {
      let user = JSON.parse(localStorage.getItem(`user${i}`));
      if (user) {
        users.push(user);
      }
    }

    // Find matches based on at least one of sport, team, or stadium
    const foundMatches = users.filter(user => (
      user.email !== currentUser.email &&
      (user.sport === currentUser.sport || 
       user.team === currentUser.team || 
       user.stadium === currentUser.stadium)
    ));

    setMatches(foundMatches);
  }, []);

  return (
    <div>
      <h1>Matches</h1>
      <div>
        {matches.length === 0 ? (
          <p>No matches found.</p>
        ) : (
          matches.slice(0, 3).map((match, index) => (
            <div key={index} className="match">
              <h3>Match: {match.name}</h3>
              <p><strong>Name:</strong> {match.name}</p>
              <p><strong>Email:</strong> {match.email}</p>
              <p><strong>City (State):</strong> {match.city}</p>
              <p><strong>Country:</strong> {match.country}</p>
              <p><strong>Sport:</strong> {match.sport}</p>
              <p><strong>Team:</strong> {match.team}</p>
              <p><strong>Dream Stadium:</strong> {match.stadium}</p>
            </div>
          ))
        )}
      </div>
      <a href="/">← Back to Home</a>
      <footer>© 2025 StadiumScore. All rights reserved.</footer>
    </div>
  );
}

export default Matches;
