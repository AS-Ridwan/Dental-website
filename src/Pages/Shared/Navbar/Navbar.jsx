import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

function Navbar() {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
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
        <Link to="/about">Contact Us</Link>
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
        <div className="navbar-start ">
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
          <a className="btn btn-ghost normal-case text-black text-xl">
            Dental Care
          </a>
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
