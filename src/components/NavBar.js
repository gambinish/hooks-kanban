import React, { Component } from 'react';
import NavStyles from './styles/NavStyles';
import { Link as AnchorLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from '../pages/About';
import FactSheet from '../pages/FactSheet';
import { Home } from '../pages/Home';

class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavStyles>
            <li>
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
              <AnchorLink to="1" smooth={true} duration={500} >Accomodations</AnchorLink>
            </li>
            <li>
              <AnchorLink to="2" smooth={true} duration={500} >Activities</AnchorLink>
            </li>
            <li>
              <AnchorLink to="3" smooth={true} duration={500} >Other Offers</AnchorLink>
            </li>
            <li>
              <RouterLink to="/about">About Kauai</RouterLink>
            </li>
            <li>
              <RouterLink to='/fact-sheet'>Kaua'i Fact Sheet</RouterLink>
            </li>
          </NavStyles>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/fact-sheet" component={FactSheet} />
        </div>
      </Router>
    );
  }
}

export default NavBar;