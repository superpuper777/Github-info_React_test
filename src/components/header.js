import React from 'react';

import logo from '../assets/img/header-logo.svg';
import './header.scss';

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="header-search-wrapper">
          <input className="header-search-wrapper-item" placeholder="search"></input>
        </div>
      </header>
    </div>
  );
};

export default Header;