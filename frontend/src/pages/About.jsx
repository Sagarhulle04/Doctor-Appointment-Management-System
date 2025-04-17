import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            About Prescripto
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Your trusted partner in healthcare, connecting patients with the
            best doctors
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-700">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Prescripto, we're dedicated to revolutionizing healthcare
              access by making it easier for patients to connect with qualified
              doctors. Our platform bridges the gap between healthcare providers
              and those in need of medical attention.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-4 cursor-pointer rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-blue-600 font-semibold">24/7 Access</h3>
                <p className="text-gray-600">
                  Book appointments anytime, anywhere
                </p>
              </div>
              <div className="bg-white cursor-pointer  p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-blue-600 font-semibold">
                  Verified Doctors
                </h3>
                <p className="text-gray-600">
                  All doctors are thoroughly vetted
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={assets.about_image}
              alt="Healthcare professionals"
              className="rounded-lg shadow-xl transform hover:scale-105 transition duration-500"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white cursor-pointer  p-4 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">100+</p>
              <p className="text-sm">Verified Doctors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white  py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Why Choose Prescripto?
          </h2>
          <div className="grid cursor-pointer  grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
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
              <h3 className="text-xl font-semibold cursor-pointer  mb-2">
                Quick Appointments
              </h3>
              <p className="text-gray-600">
                Book your appointment in minutes, not days
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
              <p className="text-gray-600">
                Your data is protected with advanced security
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
              <p className="text-gray-600">
                Access to top medical professionals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have found their perfect
            doctor through Prescripto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/doctor"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
            >
              Find a Doctor
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
