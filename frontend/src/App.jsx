import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import About from "./pages/About";
import Login from "./pages/Login";
import Appointement from "./pages/Appointement";
import MyAppointement from "./pages/MyAppointement";
import MyProfile from "./pages/MyProfile";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import { Footer } from "./components/Footer";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctor/:speciality" element={<Doctor />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-appointement" element={<MyAppointement />} />
          <Route path="/appointement/:docId" element={<Appointement />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
