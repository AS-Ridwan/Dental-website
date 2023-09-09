import React from "react";

const Blog = (blog) => {
  const { img, time, title, tags, paragraph } = blog;
  console.log(blog.time);
  return (
    <div>
      <h1>I AM BLOG</h1>
      <div>
        <img src={img} alt="picture" />
      </div>
      <div>
        <span>{time}</span>
        <h2>{title}</h2>
        <small>{tags}</small>
        <p>{paragraph}</p>
        <button>Read More{">>"}</button>
      </div>
    </div>
  );
};

export default Blog;
