import {useState} from "react";
import About from './About';


function Home () {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

function App () {
  const [page, setPage] = useState('home');
  return (
    <>
      <button onClick={()=> setPage('home')}>Home</button>
      <button onClick={()=> setPage('about')}>About</button>
      <h1>Hello World</h1>
      {page === 'home' && <Home />}
      {page === 'home' && <About />}
    </>
  );
}