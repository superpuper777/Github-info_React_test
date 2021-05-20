import React from 'react';

const RepositoryListItem = ({ label, description }) => {
  return (
    <div>
      <p>{label}</p>
      <p>{description}</p>
    </div>
    
  )
}

export default RepositoryListItem;