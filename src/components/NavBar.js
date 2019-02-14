import React, { Component, useContext } from 'react';
import NavStyles from './styles/NavStyles';
import { Link as AnchorLink } from 'react-scroll';
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from '../pages/About';
import FactSheet from '../pages/FactSheet';
import { Home } from '../pages/Home';
import { AppContext } from "../context";

const NavBar = () => {
  const [state, setState] = useState(true)

  return (
    <Router>
      <div>
        <NavStyles>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          {/* if on homepage (state = true), use scrolling logic, otherwise re-route to homepage */}
          {state
            ?
            <li>
              <AnchorLink to="1" smooth={true} duration={500}>Accomodations</AnchorLink>
            </li>
            :
            <li>
              <RouterLink to="/">
                <button onClick={() => setState(true)}>Accomodations</button>
              </RouterLink>
            </li>
          }
          {state
            ?
            <li>
              <AnchorLink to="2" smooth={true} duration={500} >Activities</AnchorLink>
            </li>
            :
            <li>
              <RouterLink to="/">
                <button onClick={() => setState(true)}>Activities</button>
              </RouterLink>
            </li>
          }
          {state
            ?
            <li>
              <AnchorLink to="2" smooth={true} duration={500}>Other Offers</AnchorLink>
            </li>
            :
            <li>
              <RouterLink to="/">
                <button onClick={() => setState(true)}>Other Offers</button>
              </RouterLink>
            </li>
          }
          <li>
            <RouterLink to="/about">
              <button onClick={() => setState(false)}>About</button>
            </RouterLink>
          </li>
          <li>
            <RouterLink to='/fact-sheet'>
              <button onClick={() => setState(false)}>Fact Sheet</button>
            </RouterLink>
          </li>
        </NavStyles>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/fact-sheet" component={FactSheet} />
        </Switch>
      </div>
    </Router>
  );
}

export default NavBar;