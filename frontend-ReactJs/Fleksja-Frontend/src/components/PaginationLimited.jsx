import React from 'react';

function PaginationLimited({ itemsPerPage, totalItems, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Determine the range of pages to display
  let startPage, endPage;
  if (totalPages <= 3) {
    // if there are 3 or less pages, show all pages
    startPage = 1;
    endPage = totalPages;
  } else if (currentPage <= 2) {
    // if the current page is at the beginning, show the first 3 pages
    startPage = 1;
    endPage = 3;
  } else if (currentPage >= totalPages - 1) {
    // if the current page is at the end, show the last 3 pages
    startPage = totalPages - 2;
    endPage = totalPages;
  } else {
    // if the current page is in the middle, show 1 page before and 1 page after it
    startPage = currentPage - 1;
    endPage = currentPage + 1;
  }

  // Create the pagination items
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <li key={i} className={`page-item ${currentPage === i ? "active" : ""}`}>
        <a href="#" className="page-link" onClick={() => onPageChange(i)}>
          {i}
        </a>
      </li>
    );
  }

  // Add the Previous and Next buttons
  const prevButton = (
    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
      <a href="#" className="page-link" onClick={() => onPageChange(currentPage - 1)}>
        &laquo;
      </a>
    </li>
  );
  const nextButton = (
    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
      <a href="#" className="page-link" onClick={() => onPageChange(currentPage + 1)}>
        &raquo;
      </a>
    </li>
  );

  return (
    <nav>
      <ul className="pagination">
        {prevButton}
        {pages}
        {nextButton}
      </ul>
    </nav>
  );
}

export default PaginationLimited;
