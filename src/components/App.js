import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import Dashboard from './Dashboard';

import './App.css';

const App = () => (
  <div>
    <Router>
      <a href="#main">Skip navigation</a>
      <nav>
        <ul></ul>
      </nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <hr />
      <main id="main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </main>
    </Router>
  </div>
);

export default App;
