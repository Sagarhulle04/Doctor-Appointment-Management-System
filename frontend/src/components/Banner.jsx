import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-100 py-10 mb-5">
      <div className="max-w-[80%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl leading-18 md:text-5xl space-y-6 font-bold text-blue-700">
            Book Appointment With 100+ Trusted Doctors
          </h1>
          <p className="text-gray-600 text-lg">
            Join us today and get access to the best healthcare professionals.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 cursor-pointer flex gap-3 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Create Account
            <img src={assets.arrow_icon} alt="arrow image" />
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={assets.appointment_img}
            alt="Appointment Illustration"
            className="w-full h-100 max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
