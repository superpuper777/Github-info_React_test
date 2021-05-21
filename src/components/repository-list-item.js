import React from 'react';
import './repository-list-item.scss';

const RepositoryListItem = ({ label, description }) => {
  return (
    <div className="repo_list_item">
      <p className="repo_list_item__title">{label}</p>
      <p className="repo_list_item__descrip">{description}</p>
    </div>
    
  )
}

export default RepositoryListItem;