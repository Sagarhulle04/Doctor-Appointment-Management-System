import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const RelatedDoctors = ({ currentDoctorId, currentSpecialty }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  // Filter related doctors based on specialty and exclude current doctor
  const relatedDoctors = doctors.filter(
    (doc) => doc.speciality === currentSpecialty && doc._id !== currentDoctorId
  );

  const handleBookNow = (doctorId) => {
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Small delay to ensure smooth transition
    setTimeout(() => {
      navigate("/appointement/" + doctorId);
    }, 300);
  };

  if (relatedDoctors.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Related Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedDoctors.map((doctor) => (
          <div
            key={doctor._id}
            className="bg-white rounded-lg shadow-md p-6 transform hover:scale-[1.02] transition duration-300"
          >
            <div className="flex items-center space-x-4">
              <img
                src={doctor.image || assets.profile_pic}
                alt={doctor.name}
                className="w-20 h-20 cursor-pointer rounded-full object-cover border-4 border-blue-100"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {doctor.name}
                </h3>
                <p className="text-blue-600">{doctor.speciality}</p>
                <div className="flex items-center mt-2">
                  <svg
                    className="w-4 h-4 text-yellow-400 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-gray-600">
                    {doctor.rating || "4.5"} ({doctor.reviews || "120"} reviews)
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-gray-600 text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{doctor.location || "Medical Center"}</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm mt-2">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{doctor.experience || "5+ years"} experience</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-blue-600 font-semibold">
                ${doctor.fees || "100"} consultation
              </span>
              <button
                className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={() => handleBookNow(doctor._id)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedDoctors;
