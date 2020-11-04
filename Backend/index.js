require("./configuration");
const express = require("express");
const app = require("./connection");
const cors = require("cors");

const userRouter = require("./Api/userapi");
const projectRouter = require("./Api/projectapi");
const footpathRouter = require("./Api/footpathapi");
const cyclewayRouter = require("./Api/cyclewayapi");
const publictransRouter=require("./Api/publictransportapi")
const stormwaterRouter=require("./Api/stormwaterapi")
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/projects", projectRouter);
app.use("/footpath", footpathRouter);
app.use("/cycleway", cyclewayRouter);
app.use("/publictrans", publictransRouter);
app.use("/stormwater", stormwaterRouter);

app.use(function (error, req, res, next) {
  console.log(error.message);
  if (req.statusCode <= 500) {
    res.json({ message: error.message });
  }
  res.status(500).send("Internal server error");
});
