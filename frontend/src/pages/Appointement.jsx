import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [doctorInfo, setDoctorInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [appointmentReason, setAppointmentReason] = useState("");
  const [showRequestForm, setShowRequestForm] = useState(false);

  // Generate time slots from 8 AM to 12 PM
  const timeSlots = Array.from({ length: 9 }, (_, i) => {
    const hour = 8 + i;
    return `${hour}:00 ${hour < 12 ? "AM" : "PM"}`;
  });

  // Generate next 7 days
  const getNextSevenDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push(date);
    }
    return days;
  };

  // Mock booked appointments data
  const [bookedAppointments, setBookedAppointments] = useState({
    "2024-04-20": ["9:00 AM", "10:00 AM"],
    "2024-04-21": ["8:00 AM", "11:00 AM"],
  });

  const fetchDoctorInfo = () => {
    try {
      setLoading(true);
      const doctor = doctors.find((doc) => doc._id === docId);
      if (!doctor) {
        setError("Doctor not found");
        return;
      }
      setDoctorInfo(doctor);
    } catch (err) {
      setError("Error fetching doctor information");
      console.error("Error fetching doctor:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (doctors && docId) {
      fetchDoctorInfo();
    }
  }, [doctors, docId]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime("");
    setShowRequestForm(false);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setShowRequestForm(true);
  };

  const handleAppointmentRequest = (e) => {
    e.preventDefault();
    // Here you would typically send the appointment request to your backend
    console.log("Appointment Request:", {
      doctorId: docId,
      date: selectedDate.toISOString().split("T")[0],
      time: selectedTime,
      reason: appointmentReason,
    });
    // Show success message and reset form
    alert("Appointment request sent successfully!");
    setShowRequestForm(false);
    setSelectedTime("");
    setAppointmentReason("");
  };

  const isSlotBooked = (date, time) => {
    const dateStr = date.toISOString().split("T")[0];
    return bookedAppointments[dateStr]?.includes(time);
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

  if (!doctorInfo) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">Doctor not found</p>
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
    <div className="min-h-screen mt-20 bg-gray-100 py-10">
      <div className="max-w-[80%] mx-auto">
        {/* Doctor Info Card */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
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
                <p className="text-1xl px-3 py-1 cursor-pointer rounded-full bg-blue-700 text-white font-medium">
                  v
                </p>
              </div>
              <div className="flex gap-6 mt-3">
                <p className="text-gray-600 text-lg mb-4">
                  {doctorInfo.degree + " - " + doctorInfo.speciality}
                </p>
                <p className="text-gray-600 cursor-pointer rounded-lg border-1 px-2 shadow text-lg mb-4">
                  {doctorInfo.experience}
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  {doctorInfo.about || "No additional information available."}
                </p>
              </div>
              <p className="text-gray-600 text-lg mt-7">
                Appointment Fees: ${doctorInfo.fees}
              </p>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">
            Book Appointment
          </h2>

          {/* Date Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Select Date
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {getNextSevenDays().map((date, index) => (
                <button
                  key={index}
                  onClick={() => handleDateSelect(date)}
                  className={`p-4 cursor-pointer rounded-lg text-center transition duration-300 ${
                    selectedDate.toDateString() === date.toDateString()
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <div className="text-sm font-medium">
                    {date.toLocaleDateString("en-US", { weekday: "short" })}
                  </div>
                  <div className="text-lg font-bold">
                    {date.toLocaleDateString("en-US", { day: "numeric" })}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Time Slots */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Available Time Slots
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {timeSlots.map((time, index) => {
                const isBooked = isSlotBooked(selectedDate, time);
                return (
                  <button
                    key={index}
                    onClick={() => !isBooked && handleTimeSelect(time)}
                    disabled={isBooked}
                    className={`p-3 cursor-pointer rounded-lg text-center transition duration-300 ${
                      isBooked
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : selectedTime === time
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {time}
                    {isBooked && (
                      <span className="block text-xs text-red-500 mt-1">
                        Booked
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Appointment Request Form */}
          {showRequestForm && (
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-700 mb-4">
                Request Appointment
              </h3>
              <form onSubmit={handleAppointmentRequest}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Selected Time
                  </label>
                  <input
                    type="text"
                    value={selectedTime}
                    disabled
                    className="w-full p-2 border rounded-lg bg-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Reason for Appointment
                  </label>
                  <textarea
                    value={appointmentReason}
                    onChange={(e) => setAppointmentReason(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                    rows="3"
                    placeholder="Please describe the reason for your appointment..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Send Request
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Related Doctors Section */}
        <RelatedDoctors
          currentDoctorId={docId}
          currentSpecialty={doctorInfo.speciality}
        />
      </div>
    </div>
  );
};

export default Appointment;
