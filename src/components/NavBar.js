import React, { Component } from 'react';
import NavStyles from './styles/NavStyles';

class NavBar extends Component {
  render() {
    return (
      <NavStyles>
        <li><a href='/'>Home</a></li>
        <li><a href='/accomodations'>Accomodations</a></li>
        <li><a href='/activities'>Activities</a></li>
        <li><a href='/other-offers'>Other Offers</a></li>
        <li><a href='/about'>About Kauai</a></li>
        <li><a href='/fact-sheet'>Kaua'i Fact Sheet</a></li>
      </NavStyles>
    );
  }
}

export default NavBar;