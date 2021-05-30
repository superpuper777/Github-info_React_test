import React from 'react';
import './pagination.scss';

const Pagination = ({ perPage, totalRepos }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalRepos / perPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <span className="pagination__count_pages">5-8 of 249 items</span>
      <div class="pagination__arrow-left"></div>
      <nav className="pagination__list_page">
        <ul className="pagination__pages">
          {pageNumbers.map(number =>
            <li key={number} className="pagination__pages_page-item">
              <a href="!#" className="pagination__pages_page-link">
                {number}
              </a>
            </li>
            )}
        </ul>
        
      </nav>
      <div class="pagination__arrow-right"></div>
      
    </div>
  
  );
}


export default Pagination;