import React from 'react';
import logo from './logo.png';
import './style.css';

function Header() {
  return (
    <header>
      <div className="hr"></div>
      <img className="logo" src={logo} alt="tiempo development" />
    </header>
  );
}

export default Header;
