const express = require("express");
const Footpath = require("../models/footpathasset");
const footpathRouter = express.Router();
footpathRouter.use(function (req, res, next) {
  console.log("Time:", Date.now());
  console.log(req.url);
  console.log("Request Type:", req.method);
  next();
});
//add digitized features to database
footpathRouter.post("/addfeatures", async (req, res, next) => {
  try {
    const {
      asset_name,
      geometry,
      Rating_Dat,
      surveyorname,
      pothole,
      cracks,
      erosion,
      slipperySurface,
      fallenBranches,
      QualityOfCurbing,
      degreeOfCleanliness,
      conditionofDrains,
      pedestrians_Sainage_Condition,
      Oper_statu,
      Asset_age,
      general_co,
      Overall_ra,
      Remain_lif,
    } = req.body;
    const newdata = {
      asset_name: asset_name,
      geometry: geometry,
      Rating_Dat: Rating_Dat,
      surveyorname: surveyorname,
      pothole: pothole,
      cracks: cracks,
      erosion: erosion,
      slipperySurface: slipperySurface,
      fallenBranches: fallenBranches,
      QualityOfCurbing: QualityOfCurbing,
      degreeOfCleanliness: degreeOfCleanliness,
      conditionofDrains: conditionofDrains,
      pedestrians_Sainage_Condition: pedestrians_Sainage_Condition,
      general_co: general_co,
      Oper_statu: Oper_statu,
      Asset_age: Asset_age,
      Overall_ra: Overall_ra,
      Remain_lif: Remain_lif,
    };

    Footpath.create(newdata)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        req.statusCode = 405;
        next(error);
      });
  } catch (error) {
    req.statusCode = 405;
    next(error);
  }
});
// add data of features to database
footpathRouter.post("/add", async (req, res, next) => {
  try {
    const {
      _id,
      asset_name,
      geometry,
      Rating_Dat,
      surveyorname,
      pothole,
      cracks,
      erosion,
      slipperySurface,
      fallenBranches,
      QualityOfCurbing,
      degreeOfCleanliness,
      conditionofDrains,
      pedestrians_Sainage_Condition,
      general_co,
      Oper_statu,
      Asset_age,
      Overall_ra,
      Remain_lif,
    } = req.body;
    console.log(_id);
    const newdata = {
      asset_name: asset_name,
      geometry: geometry,
      Rating_Dat: Rating_Dat,
      surveyorname: surveyorname,
      pothole: pothole,
      cracks: cracks,
      erosion: erosion,
      slipperySurface: slipperySurface,
      fallenBranches: fallenBranches,
      QualityOfCurbing: QualityOfCurbing,
      degreeOfCleanliness: degreeOfCleanliness,
      conditionofDrains: conditionofDrains,
      pedestrians_Sainage_Condition: pedestrians_Sainage_Condition,
      general_co: general_co,
      Oper_statu: Oper_statu,
      Asset_age: Asset_age,
      Overall_ra: Overall_ra,
      Remain_lif: Remain_lif,
    };

    Footpath.updateOne({ _id }, newdata)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        req.statusCode = 405;
        next(error);
      });
  } catch (error) {
    req.statusCode = 405;
    next(error);
  }
});
//get features in dataentry map
footpathRouter.get("/", (req, res, next) => {
  try {
    Footpath.find({}, (err, data) => {
      if (err) {
        return next(err);
      }
      res.send(data);
    });
  } catch (err) {
    next(err);
  }
});
module.exports = footpathRouter;
