import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-teal-400 font-semibold"
              : "hover:text-teal-300 transition"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            isActive
              ? "text-teal-400 font-semibold"
              : "hover:text-teal-300 transition"
          }
        >
          Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-teal-400 font-semibold"
              : "hover:text-teal-300 transition"
          }
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white/10 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-3 text-[16px] md:text-[17px] lg:text-[18px]">
        {/* Logo */}
        <div className="flex-1">
          <NavLink
            to="/"
            className="text-2xl md:text-3xl font-bold text-teal-400 hover:text-cyan-400 transition"
          >
            Career<span className="text-white">Code</span>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="menu menu-horizontal gap-6 items-center">
            {navItems}
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex gap-3 items-center">
          <NavLink
            to="/register"
            className="px-5 py-2 rounded-lg text-white bg-gradient-to-r from-teal-400 to-cyan-400 hover:scale-105 transition-all shadow"
          >
            Register
          </NavLink>
          <NavLink
            to="/signIn"
            className="px-5 py-2 rounded-lg text-teal-400 border border-teal-400 hover:bg-teal-500 hover:text-white transition-all"
          >
            Sign In
          </NavLink>
        </div>

        {/* Mobile Dropdown */}
        <div className="lg:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white/10 backdrop-blur-md rounded-box w-52 text-white space-y-1"
          >
            {navItems}
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/signIn">Sign In</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
