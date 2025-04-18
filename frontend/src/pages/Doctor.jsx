import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctor = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const filtered = speciality
      ? doctors.filter((doctor) => doctor.speciality === speciality)
      : doctors;
    setFilteredDoctors(filtered);
  }, [doctors, speciality]);

  const specialities = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Neurologist",
    "Pediatricians",
    "Gastroenterologist",
  ];

  const handleSpecialityClick = (spec) => {
    if (speciality === spec) {
      navigate("/doctor");
    } else {
      navigate(`/doctor/${spec}`);
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-20 left-4 z-50 bg-blue-600 text-white p-2 rounded-lg shadow-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed md:relative w-64 md:w-1/5 bg-white md:bg-gray-200 text-blue-600 p-6 transition-transform duration-300 ease-in-out z-40 h-full shadow-lg md:shadow-none`}
      >
        <h2 className="text-xl font-bold mb-6 text-blue-700">Specialities</h2>
        <ul className="space-y-3 ">
          {specialities.map((spec) => (
            <li
              key={spec}
              className={`group cursor-pointer transition-all duration-300 ${
                speciality === spec
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-100"
              }`}
            >
              <div
                onClick={() => handleSpecialityClick(spec)}
                className={`p-3 rounded-lg  flex items-center space-x-3 ${
                  speciality === spec
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-blue-50"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    speciality === spec ? "bg-white" : "bg-blue-600"
                  }`}
                />
                <span
                  className={`font-medium ${
                    speciality === spec ? "text-white" : "text-blue-700"
                  }`}
                >
                  {spec}
                </span>
                {speciality === spec && (
                  <svg
                    className="w-5 h-5 ml-auto transform group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:ml-0">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          {speciality ? `Doctors Specializing in ${speciality}` : "All Doctors"}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor) => (
            <div
              onClick={() => navigate("/appointement/" + doctor._id)}
              key={doctor._id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100"
              />
              <h3 className="text-blue-700 font-semibold text-lg">
                {doctor.name}
              </h3>
              <p className="text-gray-600 text-sm">{doctor.speciality}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
