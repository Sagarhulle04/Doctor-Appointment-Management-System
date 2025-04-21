import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-100 py-8 sm:py-12 md:py-16 mb-5">
      <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 leading-tight">
            Book Appointment With 100+ Trusted Doctors
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl">
            Join us today and get access to the best healthcare professionals.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 cursor-pointer flex items-center justify-center gap-2 sm:gap-3 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
          >
            Create Account
            <img 
              src={assets.arrow_icon} 
              alt="arrow" 
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={assets.appointment_img}
            alt="Appointment Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
