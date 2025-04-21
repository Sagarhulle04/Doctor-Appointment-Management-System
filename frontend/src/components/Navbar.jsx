import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [token, setToken] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const login = () => {
    setToken(true);
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-[90%] sm:max-w-[80%] mx-auto flex justify-between items-center py-2 sm:py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={assets.logo} alt="logo" className="w-20 sm:w-24 md:w-30" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <Link
            to="/"
            className="text-sm lg:text-base hover:text-blue-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/doctor"
            className="text-sm lg:text-base hover:text-blue-300 transition duration-300"
          >
            All Doctors
          </Link>
          <Link
            to="/about"
            className="text-sm lg:text-base hover:text-blue-300 active:text-red-900 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm lg:text-base hover:text-blue-300 transition duration-300"
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
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full cursor-pointer"
                  alt="Profile"
                />
                <img
                  src={assets.dropdown_icon}
                  className="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer"
                  alt="Dropdown Icon"
                  onClick={() => setShowUser(!showUser)}
                />
              </button>
              {showUser && (
                <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white rounded-md shadow-lg z-10">
                  <ul className="py-2 text-sm sm:text-base text-gray-700">
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
                      onClick={() => setToken(false)}
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
              onClick={login}
              className="bg-blue-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-300 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/doctor"
                className="text-gray-700 hover:text-blue-300 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                All Doctors
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-300 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-300 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {token ? (
                <>
                  <Link
                    to="/my-profile"
                    className="text-gray-700 hover:text-blue-300 transition duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/my-appointement"
                    className="text-gray-700 hover:text-blue-300 transition duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Appointments
                  </Link>
                  <button
                    onClick={() => {
                      setToken(false);
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-700 hover:text-blue-300 transition duration-300 text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    login();
                    setIsMenuOpen(false);
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
