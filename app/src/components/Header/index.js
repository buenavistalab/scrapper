import React from 'react';
// import logo from '../../assets/images/logo.svg';
import { HeaderWrapper } from './styles';

function Header() {
  return (
    <HeaderWrapper>
      {/* <img src={logo} alt="logo of the company Fitness Foods LC" /> */}
      <i className="ri-restaurant-line ri-2x" />
      <h1>Fitness Foods LC</h1>
    </HeaderWrapper>
  );
}

export default Header;
