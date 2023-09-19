import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <img
        className="w-full max-w-[700px] h-auto"
        src="../../../public/assets/error.png"
        alt="Page Not Found"
      />
      <Link
        className="w-100 h-30 bg-teal-400 hover:bg-teal-700 px-14 py-2 rounded-3xl text-white hover:text-white"
        to="/"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default PageNotFound;
