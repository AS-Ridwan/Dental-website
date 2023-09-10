import React from "react";
import "./Pagination.css";

const Pagination = ({
  totalPosts,
  blogPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const count = Math.ceil(totalPosts / blogPerPage);
  //   console.log(count);
  return (
    <div className="mt-10">
      {[...Array(count).keys()].map((number, i) => (
        <button
          key={i}
          className={number == currentPage ? "active mybtn" : "mybtn"}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
