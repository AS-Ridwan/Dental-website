/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const BreadCrum = ({ children }) => {
  return (
    <div>
      <div className="bg-cyan-100 h-20 flex items-center ">
        <div className="container">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a>{children}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrum;
