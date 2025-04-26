import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(null);
  const [name, setName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [email, setEmail] = useState("");
  const [degree, setDegree] = useState("");
  const [password, setPassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [experience, setExperience] = useState(1);
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");

  const { backendURL, aToken } = useContext(AdminContext);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      if (!docImg) {
        return toast.error("Please upload an image.");
      }

      if (
        !name ||
        !speciality ||
        !email ||
        !degree ||
        !password ||
        !address1 ||
        !experience ||
        !fees ||
        !about
      ) {
        return toast.error("Please fill in all required fields.");
      }

      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("speciality", speciality);
      formData.append("email", email);
      formData.append("degree", degree);
      formData.append("password", password);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );
      formData.append("experience", Number(experience));
      formData.append("fees", Number(fees));
      formData.append("about", about);

      const { data } = await axios.post(
        `${backendURL}/api/admin/add-doctor`,
        formData,
        {
          headers: {
            atoken: aToken,
          },
        }
      );

      if (data.success) {
        toast.success(data.message);
        setDocImg(null);
        setName("");
        setSpeciality("");
        setEmail("");
        setDegree("");
        setPassword("");
        setAddress1("");
        setAddress2("");
        setExperience(1);
        setFees("");
        setAbout("");
      } else {
        toast.error(data.message || "Failed to add doctor.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        error.response?.data?.message ||
          "An error occurred while adding the doctor."
      );
    }
  };

  return (
    <form
      onSubmit={handleForm}
      className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-6"
    >
      {/* Upload Picture */}
      <div className="flex flex-col items-center space-y-2">
        <label
          htmlFor="upload"
          className="text-gray-700 font-medium text-sm cursor-pointer"
        >
          <img
            src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
            alt="upload_area"
            className="w-32 h-32 object-cover rounded-full border border-gray-300"
          />
        </label>
        <input
          type="file"
          id="upload"
          onChange={(e) => setDocImg(e.target.files[0])}
          className="hidden"
          required
          accept="image/*"
        />
        <p>Upload Your Image</p>
      </div>

      {/* Name and Speciality */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-1"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="speciality"
            className="block text-gray-700 font-medium mb-1"
          >
            Speciality
          </label>
          <select
            id="speciality"
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Speciality</option>
            <option value="General physician">General physician</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Pediatricians">Pediatricians</option>
            <option value="Gastroenterologist">Gastroenterologist</option>
          </select>
        </div>
      </div>

      {/* Email and Degree */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="degree"
            className="block text-gray-700 font-medium mb-1"
          >
            Degree
          </label>
          <input
            type="text"
            id="degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      {/* Password and Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-1"
          >
            Your Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            minLength={8}
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-gray-700 font-medium mb-1"
          >
            Your Address
          </label>
          <input
            type="text"
            id="address1"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            placeholder="Line 1"
            className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            id="address2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            placeholder="Line 2"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Experience */}
      <div>
        <label
          htmlFor="experience"
          className="block text-gray-700 font-medium mb-1"
        >
          Your Experience (Years)
        </label>
        <select
          id="experience"
          value={experience}
          onChange={(e) => setExperience(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Fees */}
      <div>
        <label htmlFor="fees" className="block text-gray-700 font-medium mb-1">
          Fees
        </label>
        <input
          type="number"
          id="fees"
          value={fees}
          onChange={(e) => setFees(e.target.value)}
          min={0}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* About Me */}
      <div>
        <label htmlFor="about" className="block text-gray-700 font-medium mb-1">
          About Me
        </label>
        <textarea
          id="about"
          rows="4"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition duration-300"
      >
        Add Doctor
      </button>
    </form>
  );
};

export default AddDoctor;
