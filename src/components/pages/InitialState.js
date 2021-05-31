import React, { Fragment } from 'react';

import searchIcon from '../../assets/img/init_search_icon.svg';
import './InitialState.scss';

const InitialState = () => {
  return (
    <Fragment>
      <div className="initial_state">
        <img src={searchIcon} alt="search_icon" />
      
        <p className="initial_state__text">
          <span>Start with searching</span>
          <span>a GitHub user</span>
        </p>
        
      </div>
    </Fragment>
  )
}

export default InitialState;