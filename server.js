import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import cors from "cors";

const PORT = process.env.PORT || 8000;
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

//middlewares
app.use(express.json());
app.use(cors());

//global error handler

app.use((error, req, res, next) => {
  console.log(error.message);
  const errorCode = error.errorCode || 500;
  res.status(errorCode).json({
    status: "error",
    message: error.message,
  });
});

//all uncaught request
app.use("*", (req, res) => {
  res.json({
    message: "System status is healthy",
  });
});

//run the server
app.use(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Servver is running at http://localhost:${PORT}`);
});
