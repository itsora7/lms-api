import express from "express";
import { getUserByEmail } from "../models/userModel.js";

const router = express.Router();

//create new user

router.post("/", async (req, res, next) => {
  const { email } = req.body;
  try {
    const userExist = await getUserByEmail(email);
    if (userExist) {
      return res.json({
        status: "error",
        message: "User already exists! Please log in",
      });
    }

    //encrypt password
    
  } catch (error) {}
});
