import React from 'react';
import './Pagination.scss';

const Pagination = ({ dispatch, perPage, totalRepos, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalRepos / perPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <span className="pagination__count_pages">{perPage} of {totalRepos} items</span>
      <div className="pagination__wrapper">
      <div class="pagination__arrow-left"></div>
      <nav className="pagination__list_page">
        <ul className="pagination__pages">
          {pageNumbers.map(number =>
            <li key={number} className="pagination__page-item">
              <a onClick={() => setCurrentPage(number)} href="!#" className="pagination__page-link">
                {number}
              </a>
            </li>
            )}
        </ul>
      </nav>
      <div class="pagination__arrow-right"></div>
      </div>
    </div>
  
  );
}


export default Pagination;