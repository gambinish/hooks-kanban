import React, { Component } from 'react';
import styled from 'styled-components';
import HeroStyles from './styles/HeroStyles';


class Hero extends Component {
  render() {
    return (
      <HeroStyles>
        <h1>You don’t have to fly thousands of miles for a little adventure.</h1>
      </HeroStyles>
    );
  }
}

export default Hero;