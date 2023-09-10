import React from "react";

const Blog = (blog) => {
  const { img, time, title, tags, paragraph } = blog.blog;

  return (
    <div className="flex items-center text-start gap-10  ">
      <div className="flex gap-10 mt-10">
        <div className="w-fit">
          <img className="w-96 max-w-none" src={img} alt="picture" />
        </div>
        <div className="">
          <span>{time}</span>
          <h2 className="text-black font-bold text-xl">{title}</h2>
          <small>{tags}</small>
          <p className="text-black text-base py-5">{paragraph}</p>
          <button className="btn">Read More {">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
