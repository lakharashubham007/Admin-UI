import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  handlePagination,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderPaginationButtons = () => {
    const pageButtons = [];

    pageButtons.push(
      <button
        key="first"
        onClick={() => handlePagination(1)}
        className={currentPage === 1 ? "active" : ""}
      >
        <i className="fas fa-angle-double-left"></i>
      </button>
    );

    pageButtons.push(
      <button
        key="previous"
        onClick={() => handlePagination(currentPage - 1)}
        className={currentPage === 1 ? "disabled" : ""}
      >
        <i className="fas fa-angle-left"></i>
      </button>
    );

    for (let page = 1; page <= totalPages; page++) {
      pageButtons.push(
        <button
          key={page}
          onClick={() => handlePagination(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      );
    }

    pageButtons.push(
      <button
        key="next"
        onClick={() => handlePagination(currentPage + 1)}
        className={currentPage === totalPages ? "disabled" : ""}
      >
        <i className="fas fa-angle-right"></i>
      </button>
    );

    pageButtons.push(
      <button
        key="last"
        onClick={() => handlePagination(totalPages)}
        className={currentPage === totalPages ? "active" : ""}
      >
        <i className="fas fa-angle-double-right"></i>
      </button>
    );

    return pageButtons;
  };

  return <div className="pagination">{renderPaginationButtons()}</div>;
};

export default Pagination;
