import validator from "validator";
import bcrypt from "bcrypt";
import cloudinary from "../config/cloudinary.js";
import Doctor from "../models/doctorModel.js";

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
      return res.status(400).json({ success: false, message: "Missing details" });
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
      folder: "doctors",
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
      doctor: newDoctor
    });
  } catch (error) {
    console.error("Error adding doctor:", error);
    res.status(500).json({ 
      success: false,
      error: "Internal server error",
      message: error.message 
    });
  }
};

export { addDoctor };
