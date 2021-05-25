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
          <input type="text" className="header-search-wrapper-item"></input>
        </div>
      </header>
    </div>
  );
};

export default Header;