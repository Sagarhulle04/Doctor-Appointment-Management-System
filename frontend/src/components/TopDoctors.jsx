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
        className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition duration-300"
      >
        <img
          src={res.image}
          alt={res.name}
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <h3 className="text-blue-700 font-semibold text-lg">{res.name}</h3>
        <p className="text-gray-600 text-sm">{res.speciality}</p>
      </div>
    ));
  };

  return (
    <div className="py-10 bg-gray-100">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">Top Doctors</h1>
        <p className="text-gray-600 text-lg mt-2">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* Doctors Cards */}
      <div className="grid cursor-pointer    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {doctors.slice(0, 8).map((res) => (
          <div
            onClick={() => navigate("/appointement/" + res._id)}
            key={Math.random()}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={res.image}
              alt={res.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-blue-700 font-semibold text-lg">{res.name}</h3>
            <p className="text-gray-600 text-sm">{res.speciality}</p>
          </div>
        ))}

        <div className="flex justify-center mt-5">
          <button
            onClick={() => {
              allDoctor();
              navigate("/doctor");
            }}
            className="bg-gray-700 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
          >
            more
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopDoctors;
