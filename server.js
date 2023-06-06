import express from "express";
const app = express();

import cors from "cors";
import morgan from "morgan";
const PORT = 8000;

//middlewares
app.use(cors());
app.use(morgan());

//request handler
app.use("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

//run node app in the web server
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`server is running at http://localhost:${PORT}`);
});
