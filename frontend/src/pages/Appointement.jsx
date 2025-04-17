import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { doctors } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [doctorInfo, setDoctorInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctorInfo = () => {
      try {
        const doctor = doctors.find((doc) => doc._id === docId);
        console.log(doctor);
        if (!doctor) {
          setError("Doctor not found");
          return;
        }
        setDoctorInfo(doctor);
      } catch (err) {
        setError("Error fetching doctor information");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorInfo();
  }, [doctors, docId]);

  const handleBookAppointment = () => {
    // Navigate to the booking page with doctor ID
    navigate(`/booking/${docId}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg">
            Loading doctor information...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">{error}</p>
          <button
            onClick={() => navigate("/doctor")}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Back to Doctors
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-[80%] mx-auto">
        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Doctor Image */}
            <div className="flex-shrink-0">
              <img
                src={doctorInfo.image}
                alt={doctorInfo.name}
                className="w-32 h-32 cursor-pointer md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-100"
              />
            </div>

            {/* Doctor Details */}
            <div className="flex-grow">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
                  {doctorInfo.name}
                </h1>
                <p className="text-1xl px-3 cursor-pointer py-1 rounded-full bg-blue-700 text-white font-medium">
                  v
                </p>
              </div>
              <div className="flex gap-6 mt-3">
                <p className="text-gray-600 text-lg mb-4">
                  {doctorInfo.degree + " - " + doctorInfo.speciality}
                </p>
                <p className="text-gray-600 rounded-lg border-1 cursor-pointer px-2 shadow text-lg mb-4">
                  {doctorInfo.experience}
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  {doctorInfo.about || "No additional information available."}
                </p>
              </div>
              <p className="text-gray-600 text-lg mt-7">
                {" "}
                Appointement Fees : ${doctorInfo.fees}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
