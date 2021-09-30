import React from "react";

export const Pagination = ({
  nextPage,
  previousPage,
  currentPage,
  totalPages,
}) => {
  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <span className="page-link" onClick={previousPage}>
            {"<"} Previous Page
          </span>
        </li>
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <a className="page-link" onClick={nextPage}>
            Next Page {">"}
          </a>
        </li>
      </ul>
    </nav>
  );
};
