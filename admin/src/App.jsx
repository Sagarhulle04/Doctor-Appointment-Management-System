import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Appointement from "./pages/Admin/Appointement";
import DoctorList from "./pages/Admin/DoctorList";
import AddDoctor from "./pages/Admin/AddDoctor";

const App = () => {
  const { aToken } = useContext(AdminContext);

  return aToken ? (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer />
      <Navbar />
      <div className="flex">
        <SideBar />
        <main className="flex-1 md:ml-64 p-4">
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/all-appointments" element={<Appointement />} />
            <Route path="/add-doctor" element={<AddDoctor />} />
            <Route path="/doctor-list" element={<DoctorList />} />
          </Routes>
        </main>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
