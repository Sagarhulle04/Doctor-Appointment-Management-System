import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="py-10 ">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-2xl font-bold text-blue-700">Find by Speciality</p>
        <p className="text-gray-600 text-lg mt-2">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      </div>

      {/* Speciality Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {specialityData.map((res) => (
          <Link
            key={res.speciality}
            to={`/doctor/${res.speciality}`}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
          >
            <img
              src={res.image}
              alt={res.speciality}
              className="w-20 h-20 object-cover mb-4 rounded-full"
            />
            <p className="text-blue-700 font-semibold text-lg">
              {res.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
