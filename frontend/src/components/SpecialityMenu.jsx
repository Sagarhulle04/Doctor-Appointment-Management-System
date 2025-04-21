import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="py-8 sm:py-12 md:py-16">
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6">
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700">
          Find by Speciality
        </p>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-2 sm:mt-3 max-w-2xl mx-auto">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      </div>

      {/* Speciality Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 px-4 sm:px-6 max-w-7xl mx-auto">
        {specialityData.map((res) => (
          <Link
            key={res.speciality}
            to={`/doctor/${res.speciality}`}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-3 sm:p-4 hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            <img
              src={res.image}
              alt={res.speciality}
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover mb-2 sm:mb-4 rounded-full"
            />
            <p className="text-blue-700 font-semibold text-sm sm:text-base md:text-lg text-center">
              {res.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
