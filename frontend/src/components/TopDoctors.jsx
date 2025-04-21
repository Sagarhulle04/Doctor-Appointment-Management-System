import React, { useContext } from "react";
import { doctors } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const allDoctor = () => {
    return doctors.map((res) => (
      <div
        key={Math.random()}
        className="bg-white shadow-md rounded-lg p-4 sm:p-6 flex flex-col items-center hover:shadow-lg transition duration-300"
      >
        <img
          src={res.image}
          alt={res.name}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-3 sm:mb-4"
        />
        <h3 className="text-blue-700 font-semibold text-base sm:text-lg">{res.name}</h3>
        <p className="text-gray-600 text-xs sm:text-sm">{res.speciality}</p>
      </div>
    ));
  };

  return (
    <div className="py-8 sm:py-12 md:py-16 bg-gray-100">
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
          Top Doctors
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-2 sm:mt-3 max-w-2xl mx-auto">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* Doctors Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 max-w-7xl mx-auto">
        {doctors.slice(0, 8).map((res) => (
          <div
            onClick={() => navigate("/appointement/" + res._id)}
            key={Math.random()}
            className="bg-white shadow-md rounded-lg p-4 sm:p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <img
              src={res.image}
              alt={res.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-3 sm:mb-4"
            />
            <h3 className="text-blue-700 font-semibold text-base sm:text-lg text-center">
              {res.name}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm text-center">
              {res.speciality}
            </p>
          </div>
        ))}

        <div className="col-span-full flex justify-center mt-6 sm:mt-8">
          <button
            onClick={() => {
              allDoctor();
              navigate("/doctor");
            }}
            className="bg-gray-700 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-md text-sm sm:text-base"
          >
            View All Doctors
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopDoctors;
