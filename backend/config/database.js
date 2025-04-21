import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connection.on("connected", () => {
    console.log("database connected");
  });
  await mongoose.connect(`${process.env.MONGO_URL}/dams`);
};

export default connectDB;
