import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { AdminContext } from "../context/AdminContext.jsx";

const SideBar = () => {
  const { aToken } = useContext(AdminContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/admin-dashboard", label: "Dashboard", icon: assets.home_icon },
    {
      path: "/all-appointments",
      label: "Appointments",
      icon: assets.appointment_icon,
    },
    { path: "/add-doctor", label: "Add Doctor", icon: assets.add_user },
    { path: "/doctor-list", label: "Doctor List", icon: assets.doctor_icon },
  ];

  return (
    aToken && (
      <>
        {/* Mobile menu button */}
        <div className="md:hidden fixed top-20 left-0 p-4 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md bg-gray-800 text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-20 left-0 h-screen w-64 bg-gray-100 text-black transform transition-transform duration-200 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 z-40`}
        >
          {/* Navigation */}
          <nav className="mt-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "bg-gray-100 hover:bg-gray-700 text-black hover:text-white"
                    : "text-black hover:bg-gray-700 hover:text-white"
                }`}
              >
                {/* Icon */}
                <img
                  src={item.icon}
                  alt={`${item.label} Icon`}
                  className="w-5 h-5 mr-4"
                />
                {/* Label */}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Overlay for mobile */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-white bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </>
    )
  );
};

export default SideBar;
