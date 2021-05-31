import React from 'react';

import logo from '../assets/img/header-logo.svg';
import './header.scss';
import Search from './search';

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="header-search-wrapper">
          <Search />
        </div>
      </header>
    </div>
  );
};

export default Header;