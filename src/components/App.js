import React, { useState, useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import Dashboard from './Dashboard';
import VideoModal from './VideoModal';

import './App.css';

const App = () => {

  const appEl = useRef(null);
  const triggerEl = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  // const [trigger, setTrigger] = useState();

  const openModal = e => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    console.log(triggerEl);
    triggerEl.current.focus();
  };

  return (
    <>
      <div ref={appEl}>
        <Router>
          <a className="visually-hidden" id="skip-nav" href="#main">
            Skip navigation
          </a>
          <nav>
            <ul>
              <li>
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </nav>
          <main id="main">
            <Switch>
              <Route exact path="/">
                <Home openModal={openModal} triggerRef={triggerEl} />
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
      {modalOpen && <VideoModal closeModal={closeModal} />}
    </>
  );
};

export default App;
