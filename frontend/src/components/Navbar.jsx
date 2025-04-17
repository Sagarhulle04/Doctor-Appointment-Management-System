import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const [showUser, setShowUser] = useState(false);
  const [token, setToken] = useState(false);

  const login = () => {
    setToken(true);
  };

  return (
    <nav className="bg-white  text-blue-700 shadow-md">
      <div className="max-w-[80%] mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={assets.logo} alt="logo" className="w-30" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-blue-300 transition duration-300">
            Home
          </Link>
          <Link
            to="/doctor"
            className="hover:text-blue-300 transition duration-300"
          >
            All Doctors
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-300 active:text-red-900 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-300 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
          {token ? (
            <div className="relative">
              <button className="flex items-center space-x-2">
                <img
                  onClick={() => navigate("/my-profile")}
                  src={assets.profile_pic}
                  className="w-12 h-12 rounded-full cursor-pointer"
                  alt="Profile"
                />
                <img
                  src={assets.dropdown_icon}
                  className="w-4 h-4 cursor-pointer"
                  alt="Dropdown Icon"
                  onClick={() => setShowUser(!showUser)}
                />
              </button>
              {showUser && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <ul className="py-2 text-gray-700">
                    <li
                      onClick={() => navigate("/my-profile")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      My Profile
                    </li>
                    <li
                      onClick={() => navigate("/my-appointement")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      My Appointments
                    </li>
                    <li
                      onClick={() => {
                        setToken(false);
                        navigate("/");
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                login();
              }}
              className="text-white bg-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Create Account
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-blue-500">
          <div className="flex flex-col space-y-4 py-4 px-6">
            {token ? (
              <div className="relative">
                <button className="flex items-center space-x-2">
                  <img
                    onClick={() => navigate("/my-profile")}
                    src={assets.profile_pic}
                    className="w-12 h-12 rounded-full cursor-pointer"
                    alt="Profile"
                  />
                  <img
                    src={assets.dropdown_icon}
                    className="w-4 h-4 cursor-pointer"
                    alt="Dropdown Icon"
                    onClick={() => setShowUser(!showUser)}
                  />
                </button>
                {showUser && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <ul className="py-2 text-gray-700">
                      <li
                        onClick={() => navigate("/my-profile")}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        My Profile
                      </li>
                      <li
                        onClick={() => navigate("/my-appointement")}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        My Appointments
                      </li>
                      <li
                        onClick={() => {
                          setToken(false);
                          navigate("/login");
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                  login();
                }}
                className="text-white bg-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
              >
                Create Account
              </button>
            )}
            <Link
              to="/"
              className="hover:text-blue-700 transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/doctor"
              className="hover:text-blue-700 transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              All Doctors
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-700  transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-700 transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
