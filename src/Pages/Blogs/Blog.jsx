import React from "react";

const Blog = (blog) => {
  const { img, time, title, tags, paragraph } = blog.blog;

  // display: flex;
  // align-items: center;
  // flex-direction: row;
  // text-align: start;
  // gap: 20px;

  return (
    <div className="flex items-center text-start gap-10  ">
      <div className="flex gap-10 mt-10">
        <div className="w-fit">
          <img className="w-96 max-w-none" src={img} alt="picture" />
        </div>
        <div className="">
          <span>{time}</span>
          <h2>{title}</h2>
          <small>{tags}</small>
          <p>{paragraph}</p>
          <button>Read More{">>"}</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
