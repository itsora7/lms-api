import express from "express";
const router = express.Router(); // get post method

router.get("/", (req, res) => {
  try {
    //get all the data from db and return
    res.json({
      status: "success",
      message: "Here are the users",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});

export default router;
