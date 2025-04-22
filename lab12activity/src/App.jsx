import { useState } from "react";
import About from './About';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${page === 'home' ? 'active' : ''}`}
            onClick={() => setPage('home')}
          >
            Home
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${page === 'about' ? 'active' : ''}`}
            onClick={() => setPage('about')}
          >
            About
          </button>
        </li>
      </ul>

      <h1 className="mt-3">Hello World</h1>
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
    </>
  );
}
export default App;