import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointement = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-4 sm:py-8 px-2 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-8 text-center">
          My Appointments
        </h1>
        <div className="space-y-4 sm:space-y-6">
          {doctors.slice(0, 2).map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden transform hover:scale-[1.01] sm:hover:scale-[1.02] transition duration-300"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Doctor Image */}
                <div className="w-full sm:w-1/3 bg-gray-100 rounded-t-xl sm:rounded-l-xl p-3 sm:p-4 md:p-6">
                  <div className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-end justify-center p-3 sm:p-4">
                      <button className="bg-white text-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-50 transition duration-300">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>

                {/* Doctor Information */}
                <div className="w-full sm:w-2/3 p-3 sm:p-4 md:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    {/* Name and Speciality */}
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                        {doctor.name}
                      </h2>
                      <p className="text-blue-600 text-sm sm:text-base font-medium">
                        {doctor.speciality}
                      </p>
                    </div>

                    {/* Experience and Rating */}
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      <div className="flex items-center space-x-2">
                        <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-600">
                          {doctor.experience} years experience
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-600">
                          {doctor.rating} ({doctor.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full mt-1">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
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
                      </div>
                      <div>
                        <p className="text-sm sm:text-base text-gray-600">
                          {doctor.address.line1}
                          <br />
                          {doctor.address.line2}
                        </p>
                      </div>
                    </div>

                    {/* Appointment Details */}
                    <div className="pt-3 sm:pt-4 border-t border-gray-200">
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        <div className="flex items-center space-x-2">
                          <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full">
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
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
                          </div>
                          <span className="text-sm sm:text-base text-gray-600">
                            Next: {doctor.nextAvailable}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full">
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base text-gray-600">
                            Fee: ${doctor.fee}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4">
                      <button className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Pay Online
                      </button>
                      <button className="w-full sm:w-auto px-4 sm:px-6 py-2 border border-gray-300 text-gray-700 text-sm sm:text-base rounded-lg hover:bg-gray-50 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                        Cancel Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAppointement;
