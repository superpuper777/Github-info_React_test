import React, { Fragment } from 'react';

import repositoryNotFoundIcon from '../../assets/img/rep_not_found.svg';
import './RepositoryNotFound.scss';

const InitialState = () => {
  return (
    <Fragment>
      <div className="rep_not_found">
        <img src={repositoryNotFoundIcon} alt="not_found_icon" />
        <span className="rep_not_found__text">Repository list is empty</span>
      </div>
    </Fragment>
  )
}

export default InitialState;