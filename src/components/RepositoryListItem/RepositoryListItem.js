import React from 'react';
import './RepositoryListItem.scss';

const RepositoryListItem = ({ repo }) => {
  const { html_url, name, description } = repo;
  return (
    <div className="repo_list_item">
      <p className="repo_list_item__title"><a className="repo_list_item__title-link"href={html_url}>{name}</a></p>
      <p className="repo_list_item__descrip">{description}</p>
    </div>
    
  )
}

export default RepositoryListItem;