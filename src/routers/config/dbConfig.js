import mongoose from "mongoose";

const connectDB = () => {
  const mongoUrl = "mongodb://localhost:27017/LMS_API";
  const conn = mongoose.connect();
};
