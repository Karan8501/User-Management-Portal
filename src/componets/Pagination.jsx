import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    } else {
      alert("out of range");
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageClick(currentPage - 1)}>
        <ChevronLeftIcon />
      </button>
      <span>{currentPage}</span>
      <button onClick={() => handlePageClick(currentPage + 1)}>
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
