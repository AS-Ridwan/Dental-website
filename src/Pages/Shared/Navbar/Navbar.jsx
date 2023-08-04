import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

import logo from "../../../assets/images/teeth-icon.png";

function Navbar() {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contactus">Contact Us</Link>
      </li>
      <li>
        {user ? (
          <button
            className="bg-primary text-white flex content-center"
            onClick={logout}
          >
            Sign Out
          </button>
        ) : (
          <Link className="bg-primary text-white" to="/login">
            LogIn
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div className="container">
      <div className="navbar bg-base-100 justify-between">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
            >
              {menuItems}
            </ul>
          </div>

          <Link
            to="/"
            className=" normal-case text-black text-xl hover:text-black"
          >
            <span className="flex items-center">
              <img src={logo} alt="" className="w-16" /> Dental Care
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base text-black">
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
