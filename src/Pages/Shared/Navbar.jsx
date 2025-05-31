import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged Out",
          text: "You have successfully logged out.",
          timer: 2000,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Logout failed! Please try again.",
        });
      });
  };

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
      {
        user && <>
          <NavLink
          to="/myApplication"
          className={({ isActive }) =>
            isActive
              ? "text-teal-400 font-semibold"
              : "hover:text-teal-300 transition"
          }
        >
          My Application
        </NavLink>
        </>
      }
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
          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/register"
                className="px-5 py-2 rounded-md bg-gradient-to-r from-teal-400 to-cyan-400 text-white font-semibold hover:scale-105 transform transition-shadow shadow-md"
              >
                Register
              </NavLink>
              <NavLink
                to="/signIn"
                className="px-5 py-2 rounded-md border-2 border-teal-400 text-teal-400 font-semibold hover:bg-teal-500 hover:text-white transition"
              >
                Sign In
              </NavLink>
            </>
          )}
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
            {user ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 rounded-md bg-teal-500 text-white"
                        : "block px-4 py-2 rounded-md text-white hover:bg-teal-600 transition"
                    }
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signIn"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 rounded-md bg-teal-500 text-white"
                        : "block px-4 py-2 rounded-md text-white hover:bg-teal-600 transition"
                    }
                  >
                    Sign In
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
