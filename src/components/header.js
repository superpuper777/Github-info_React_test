import React from 'react';

import logo from '../assets/img/header-logo.svg';
import './header.scss';
import Search from './Search';
// dispatch
const Header = ({ dispatch, setLoading }) => {
  return (
    <div>
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="header-search-wrapper">
        
          <Search dispatch={dispatch} setLoading={setLoading} />
        </div>
      </header>
    </div>
  );
};

export default Header;