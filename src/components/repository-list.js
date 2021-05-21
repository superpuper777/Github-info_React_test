import React from "react";
import RepositoryListItem from './repository-list-item';

import './repository-list.scss';

const RepositoryList = ({ repos }) => {
  const elements = repos.map((item, index) => {
    return (

   <li key={index}>
        <RepositoryListItem { ...item } />
  </li>
    );
  });

  return (
    <div>
    <h2 className="repos__title">Repositories (249)</h2>
    <ul className="repos__list-items">{elements}</ul>
    </div>
    
  );
};

export default RepositoryList;
