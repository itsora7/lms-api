import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const mongoUrl = "mongodb://127.0.0.1:27017/LMS_api";

    if (!process.env.mongoUrl) {
      return console.log("Mongo_URL is not defined");
    }
    const conn = mongoose.connect(mongoUrl);

    conn
      ? console.log("Mongo database connected successfully")
      : console.log("Database connection failed");
  } catch (error) {
    console.error(error);
  }
};
