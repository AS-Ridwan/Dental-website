import React, { useEffect, useState } from "react";
import BreadCrum from "../Shared/BreadCrum/BreadCrum";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const url = "blogs.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <BreadCrum>Blogs</BreadCrum>
      <div className="container my-16 ">
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
