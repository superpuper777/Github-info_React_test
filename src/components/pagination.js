import React from 'react';
import './pagination.scss';

const Pagination = ({ perPage, totalRepos }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalRepos / perPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <span className="pagination__pages">5-8 of 249 items</span>
      
    </div>
  
  );
}


export default Pagination;