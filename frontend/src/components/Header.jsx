import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 sm:mt-10 py-4 sm:py-6 md:py-6">
      <div className="max-w-[90%] sm:max-w-[80%] mx-auto flex flex-col-reverse sm:flex-row items-center justify-between px-3 sm:px-4 md:px-6">
        {/* Left Side: Information */}
        <div className="w-full sm:w-1/2 text-center sm:text-left space-y-4 sm:space-y-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-blue-700 leading-tight sm:leading-normal">
            Book Appointment With Trusted Doctors
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 items-center">
            <img
              src={assets.group_profiles}
              className="w-16 h-8 sm:w-20 sm:h-10 md:w-30 md:h-12 object-contain"
              alt="Group profile image"
            />
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 text-center sm:text-left">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <a
            href="#speciality"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-blue-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-medium sm:font-semibold text-sm sm:text-base md:text-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            Book Appointment
            <img
              src={assets.arrow_icon}
              alt="Arrow Icon"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="w-full sm:w-1/2 flex justify-center mb-4 sm:mb-0">
          <img
            src={assets.header_img}
            alt="Header Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
