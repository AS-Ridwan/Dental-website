import React, { useEffect, useState } from "react";
import BreadCrum from "../Shared/BreadCrum/BreadCrum";
import "../Shared/ScrollToTop/ScrollToTop.css";
import Blog from "./Blog";
import Pagination from "../Shared/Pagination/Pagination";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ScrollToTop from "react-scroll-to-top";

const Blogs = () => {
  useDocumentTitle("Blogs");
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPerPage, setBlogPerPage] = useState(4);

  useEffect(() => {
    const url = "blogs.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const lastPageIndex = currentPage * blogPerPage; // 2*4=8;
  const firstPageIndex = lastPageIndex - blogPerPage; // 8-4=4;
  const myBlogs = blogs.slice(firstPageIndex, lastPageIndex);

  return (
    <div>
      <BreadCrum>Blogs</BreadCrum>
      <div className="container my-16 ">
        {myBlogs.map((blog) => (
          <Blog blog={blog} key={blog.id}></Blog>
        ))}
        {/* <Pagination></Pagination> */}

        <Pagination
          totalPosts={blogs.length}
          blogPerPage={blogPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Pagination>
        <div>
          <ScrollToTop className="scrollBtn" smooth></ScrollToTop>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
