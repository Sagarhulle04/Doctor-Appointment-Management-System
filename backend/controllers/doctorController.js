import Doctor from "../models/doctorModel.js";

const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;
    const docData = await Doctor.findById(docId);
    await Doctor.findByIdAndUpdate(docId, { available: !docData.available });
    res.json({ success: true, message: "Availablity Changed" });
  } catch (error) {
    console.error("Error checking availability:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { changeAvailability };
