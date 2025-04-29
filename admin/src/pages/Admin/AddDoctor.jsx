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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);

  const { backendURL, aToken } = useContext(AdminContext);

  const handleForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setProgress(0);

    try {
      if (!docImg) {
        setIsSubmitting(false);
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
        setIsSubmitting(false);
        return toast.error("Please fill in all required fields.");
      }

      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return prev;
          }
          return prev + 10;
        });
      }, 200);

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
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 90) / progressEvent.total
            );
            setProgress(percentCompleted);
          },
        }
      );

      clearInterval(progressInterval);
      setProgress(100);

      if (data.success) {
        toast.success(data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        
        // Reset form with animation
        setTimeout(() => {
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
          setProgress(0);
          setIsSubmitting(false);
        }, 1000);
      } else {
        toast.error(data.message || "Failed to add doctor.");
        setIsSubmitting(false);
        setProgress(0);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        error.response?.data?.message ||
          "An error occurred while adding the doctor."
      );
      setIsSubmitting(false);
      setProgress(0);
    }
  };

  return (
    <form
      onSubmit={handleForm}
      className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-6 relative"
    >
      {/* Progress Bar */}
      {isSubmitting && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
          <div
            className="h-full bg-blue-600 transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {/* Upload Picture */}
      <div className="flex flex-col items-center space-y-2">
        <label
          htmlFor="upload"
          className={`text-gray-700 font-medium text-sm cursor-pointer ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <img
            src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
            alt="upload_area"
            className={`w-32 h-32 object-cover rounded-full border border-gray-300 ${
              isSubmitting ? "animate-pulse" : ""
            }`}
          />
        </label>
        <input
          type="file"
          id="upload"
          onChange={(e) => setDocImg(e.target.files[0])}
          className="hidden"
          required
          accept="image/*"
          disabled={isSubmitting}
        />
        <div className="flex gap-2">
          <p className={isSubmitting ? "text-gray-400" : ""}>Upload Your Image</p>
          {docImg && (
            <button
              type="button"
              onClick={() => setDocImg(null)}
              className="text-red-500 hover:text-red-700 text-sm"
              disabled={isSubmitting}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Name and Speciality */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className={`block text-gray-700 font-medium mb-1 ${
              isSubmitting ? "text-gray-400" : ""
            }`}
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""
            }`}
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label
            htmlFor="speciality"
            className={`block text-gray-700 font-medium mb-1 ${
              isSubmitting ? "text-gray-400" : ""
            }`}
          >
            Speciality
          </label>
          <select
            id="speciality"
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""
            }`}
            required
            disabled={isSubmitting}
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
            className={`block text-gray-700 font-medium mb-1 ${
              isSubmitting ? "text-gray-400" : ""
            }`}
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""
            }`}
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label
            htmlFor="degree"
            className={`block text-gray-700 font-medium mb-1 ${
              isSubmitting ? "text-gray-400" : ""
            }`}
          >
            Degree
          </label>
          <input
            type="text"
            id="degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""
            }`}
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      {/* Password and Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="password"
            className={`block text-gray-700 font-medium mb-1 ${
              isSubmitting ? "text-gray-400" : ""
            }`}
          >
            Your Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""
            }`}
            required
            minLength={8}
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className={`block text-gray-700 font-medium mb-1 ${
              isSubmitting ? "text-gray-400" : ""
            }`}
          >
            Your Address
          </label>
          <input
            type="text"
            id="address1"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            placeholder="Line 1"
            className={`w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""
            }`}
            required
            disabled={isSubmitting}
          />
          <input
            type="text"
            id="address2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            placeholder="Line 2"
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          />
        </div>
      </div>

      {/* Experience */}
      <div>
        <label
          htmlFor="experience"
          className={`block text-gray-700 font-medium mb-1 ${
            isSubmitting ? "text-gray-400" : ""
          }`}
        >
          Your Experience (Years)
        </label>
        <select
          id="experience"
          value={experience}
          onChange={(e) => setExperience(Number(e.target.value))}
          className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""
          }`}
          required
          disabled={isSubmitting}
        >
          <option value={1}>1 Year</option>
          <option value={2}>2 Years</option>
          <option value={3}>3 Years</option>
          <option value={4}>4 Years</option>
          <option value={5}>5 Years</option>
          <option value={6}>6 Years</option>
          <option value={7}>7 Years</option>
          <option value={8}>8 Years</option>
          <option value={9}>9 Years</option>
          <option value={10}>10 Years</option>
        </select>
      </div>

      {/* Fees */}
      <div>
        <label htmlFor="fees" className={`block text-gray-700 font-medium mb-1 ${
          isSubmitting ? "text-gray-400" : ""
        }`}>
          Fees
        </label>
        <input
          type="number"
          id="fees"
          value={fees}
          onChange={(e) => setFees(e.target.value)}
          min={0}
          className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""
          }`}
          required
          disabled={isSubmitting}
        />
      </div>

      {/* About Me */}
      <div>
        <label htmlFor="about" className={`block text-gray-700 font-medium mb-1 ${
          isSubmitting ? "text-gray-400" : ""
        }`}>
          About Me
        </label>
        <textarea
          id="about"
          rows="4"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""
          }`}
          required
          disabled={isSubmitting}
        ></textarea>
      </div>

      {/* Submit Button with Loading State */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-2 px-4 rounded-md font-medium transition duration-300 ${
          isSubmitting
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
        } text-white flex items-center justify-center space-x-2`}
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>Adding Doctor...</span>
          </>
        ) : (
          "Add Doctor"
        )}
      </button>
    </form>
  );
};

export default AddDoctor;
