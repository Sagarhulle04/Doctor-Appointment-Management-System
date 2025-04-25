import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAToken, backendURL } = useContext(AdminContext);
  console.log(backendURL);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(`${backendURL}/api/admin/login`, {
          email,
          password,
        });
        if (data.success) {
          console.log("Token:", data.token); 
          setAToken(data.token); 
        } else {
          console.log("Login failed:", data.message);
        }
      } else if (state === "Doctor") {
        console.log("Doctor login logic not implemented yet.");
      }
    } catch (error) {
      console.error(
        "Error during login:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {state === "Admin" ? "Admin Login" : "Doctor Login"}
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>

          {/* Toggle Login Type */}
          <div className="text-center mt-4">
            {state === "Admin" ? (
              <p className="text-sm text-gray-600">
                Doctor Login:{" "}
                <span
                  onClick={() => setState("Doctor")}
                  className="text-blue-600 cursor-pointer hover:underline"
                >
                  Click Here
                </span>
              </p>
            ) : (
              <p className="text-sm text-gray-600">
                Admin Login:{" "}
                <span
                  onClick={() => setState("Admin")}
                  className="text-blue-600 cursor-pointer hover:underline"
                >
                  Click Here
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
