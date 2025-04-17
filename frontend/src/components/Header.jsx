import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 mt-3 py-10">
      <div className="max-w-[80%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
        {/* Left Side: Information */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl leading-18 md:text-5xl font-bold text-blue-700">
            Book Appointment With Trusted Doctors
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-4 items-center">
            <img
              src={assets.group_profiles}
              className="w-20 h-10 md:w-30 md:h-12"
              alt="Group profile image"
            />
            <p className="text-gray-600 text-center md:text-left text-sm md:text-lg">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <a
            href="#speciality"
            // onClick={() => navigate("/appointement")}
            className="flex items-center w-86 justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
          >
            Book Appointment
            <img src={assets.arrow_icon} alt="Arrow Icon" className="w-6 h-6" />
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={assets.header_img}
            alt="Header Illustration"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
