import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Directory from './components/Directory';
import Contact from './components/Contact';
import Interview from './components/Interview';
import Matches from './components/Matches';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/directory" component={Directory} />
          <Route path="/contact" component={Contact} />
          <Route path="/interview" component={Interview} />
          <Route path="/matches" component={Matches} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
