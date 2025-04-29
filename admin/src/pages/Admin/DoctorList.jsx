import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorList = () => {
  const { getAllDoctors, doctors, aToken, changeAvailablility } =
    useContext(AdminContext);
  const [availability, setAvailability] = useState({}); // State to track availability

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  return (
    <div className="doctor-list p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Doctor List</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {doctors.map((item, index) => (
          <div
            className="doctor-card cursor-pointer bg-white shadow-md rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            key={index}
          >
            <div className="w-full h-44 overflow-hidden rounded-md mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.speciality}</p>
            <p className="text-sm text-gray-600">
              Experience: {item.experience} years
            </p>
            <p className="text-sm text-gray-600">Fees: ${item.fees}</p>
            <div className="mt-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={item.availability}
                  onChange={() => changeAvailablility(item._id)}
                  className="form-checkbox cursor-pointer h-5 w-5 text-blue-600"
                />
                <span className="text-sm text-gray-600">
                  {availability[item.id] ? "Available" : "Unavailable"}
                </span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
