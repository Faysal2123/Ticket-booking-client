import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="md:w-11/12 mx-auto">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" text-base font-semibold menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              
              <li>
                <NavLink to='/flights'>Flights</NavLink>
              </li>
              <li>
                <NavLink to='/dashboard'>Dashboard</NavLink>
              </li>
              <li>
                <NavLink to='contact'>Contact Us</NavLink>
              </li>
             
            </ul>
          </div>
          <a className="btn btn-ghost md:text-3xl text-2xl font-extrabold">TicketEase</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-semibold ">
          <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              
              <li>
                <NavLink to='/flights'>Flights</NavLink>
              </li>
              <li>
                <NavLink to='/dashboard'>Dashboard</NavLink>
              </li>
              <li>
                <NavLink to='contact'>Contact Us</NavLink>
              </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
         <Link to='/login' className="btn btn-accent text-white font-bold">Login</Link>
         <Link to='/register' className="btn btn-error text-white font-bold">Registration</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
