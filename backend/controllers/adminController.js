import validator from "validator";
import bcrypt from "bcrypt";
import cloudinary from "../config/cloudinary.js";
import Doctor from "../models/doctorModel.js";
import jwt from "jsonwebtoken";

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      fees,
      degree,
      experience,
      about,
      address,
    } = req.body;

    const imageFile = req.file;

    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !fees ||
      !degree ||
      !experience ||
      !about ||
      !address ||
      !imageFile
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Missing details" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter valid Email Id",
      });
    }

    if (!validator.isStrongPassword(password) && password.length < 8) {
      return res.status(400).json({
        success: false,
        message:
          "Please enter strong password and password length should be of 8 or more character",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    // Upload image to Cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const imageURL = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      password: hashPassword,
      image: imageURL,
      speciality,
      about,
      fees,
      degree,
      experience,
      address: JSON.parse(address),
      date: Date.now(),
    };

    const newDoctor = new Doctor(doctorData);
    await newDoctor.save();

    res.status(201).json({
      success: true,
      message: "Doctor added successfully",
      doctor: newDoctor,
    });
  } catch (error) {
    console.error("Error adding doctor:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      message: error.message,
    });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);

      return res.status(200).json({
        success: true,
        message: "Admin Logged In",
        token,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    console.error("Error in admin login:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
      message: error.message,
    });
  }
};

// API TO GET ALL DOCTOR
const allDoctor = async (req, res) => {
  const doctors = await Doctor.find({}).select("-password");
  res.json({ success: true, doctors });
};
export { addDoctor, adminLogin, allDoctor };
