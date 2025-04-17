import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctor = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const filtered = speciality
      ? doctors.filter((doctor) => doctor.speciality === speciality)
      : doctors;
    setFilteredDoctors(filtered);
  }, [doctors, speciality]);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-200 text-blue-600 p-6">
        <h2 className="text-xl font-bold mb-6">Specialities</h2>
        <ul className="space-y-4">
          <li
            className="hover:text-blue-700 cursor-pointer"
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctor")
                : navigate("/doctor/General physician")
            }
          >
            General physician
          </li>
          <li
            className="hover:text-blue-700 cursor-pointer"
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctor")
                : navigate("/doctor/Gynecologist")
            }
          >
            Gynecologist
          </li>
          <li
            className="hover:text-blue-700 cursor-pointer"
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctor")
                : navigate("/doctor/Dermatologist")
            }
          >
            Dermatologist
          </li>
          <li
            className="hover:text-blue-700 cursor-pointer"
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctor")
                : navigate("/doctor/Neurologist")
            }
          >
            Neurologist
          </li>
          <li
            className="hover:text-blue-700 cursor-pointer"
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctor")
                : navigate("/doctor/Pediatricians")
            }
          >
            Pediatricians
          </li>
          <li
            className="hover:text-blue-700 cursor-pointer"
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctor")
                : navigate("/doctor/Gastroenterologist")
            }
          >
            Gastroenterologist
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          {speciality ? `Doctors Specializing in ${speciality}` : "All Doctors"}
        </h1>
        <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor) => (
            <div
              onClick={() => navigate("/appointement/" + doctor._id)}
              key={doctor._id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition duration-300"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
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
