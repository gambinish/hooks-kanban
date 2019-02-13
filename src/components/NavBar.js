import React, { Component } from 'react';
import NavStyles from './styles/NavStyles';
import { Link } from 'react-scroll'

class NavBar extends Component {
  render() {
    return (
      <NavStyles>
        <li><a href='/'>Home</a></li>
        <li>
          <Link to="1" smooth={true} duration={500} >Accomodations</Link>
        </li>
        <li>
          <Link to="2" smooth={true} duration={500} >Activities</Link>
        </li>
        <li>
          <Link to="3" smooth={true} duration={500} >Other Offers</Link>
        </li>
        <li><a href='/about'>About Kauai</a></li>
        <li><a href='/fact-sheet'>Kaua'i Fact Sheet</a></li>
      </NavStyles>
    );
  }
}

export default NavBar;