import React, { useContext } from "react";
import { assets } from "../assets/assets.js";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (aToken) {
      setAToken("");
      localStorage.removeItem("aToken");
      navigate("/login");
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <img
              src={assets.admin_logo}
              alt="Admin Logo"
              className="h-10 w-auto"
            />
            <span className="ml-4 text-gray-800 border border-gray-400 rounded-full py-0.5 px-2.5 cursor-pointer text-sm sm:text-base md:text-lg shadow-sm">
              {aToken ? "Admin" : "Doctor"}
            </span>
          </div>

          {/* Right side items */}
          <div className="flex items-center">
            {/* Logout Button */}
            <button
              className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
