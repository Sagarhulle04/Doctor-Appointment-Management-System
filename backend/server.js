import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/database.js";
import connectCloudinary from "./config/cloudinry.js";
import adminRouter from "./routes/adminRoute.js";

// SECRET ENV
const port = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Config file Configuration
connectDB();
connectCloudinary;

// Routes
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

// Server running
app.listen(port, () => {
  console.log("server running");
});
