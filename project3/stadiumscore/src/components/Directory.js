import React from 'react';

function Directory() {
  return (
    <div>
      <h1>Fan Directory</h1>
      <p>Start connecting with fellow sports fans:</p>
      <ul>
        <li><a href="/contact">Input Contact Info</a></li>
        <li><a href="/interview">Fan Interview Questions</a></li>
        <li><a href="/matches">See Your Matches</a></li>
      </ul>
      <a href="/">← Back to Home</a>
      <footer>© 2025 StadiumScore. All rights reserved.</footer>
    </div>
  );
}

export default Directory;
