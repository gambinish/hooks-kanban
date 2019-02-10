import React, { Component } from 'react';
import styled from 'styled-components';

const HeroImage = styled.div`
  align-items: center;
`

class Hero extends Component {
  render() {
    return (
      <HeroImage>
        <img height='450px' width='100%' src='https://www.kauaikamaaina.com/img/hero-kvb.jpg'></img>
      </HeroImage>
    );
  }
}

export default Hero;