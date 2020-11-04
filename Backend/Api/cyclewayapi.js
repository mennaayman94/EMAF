const express = require("express");
const cyclewayRouter = express.Router();
const Cycleway = require("../models/cyclewayModel");
cyclewayRouter.use(function (req, res, next) {
  console.log("Time:", Date.now());
  console.log(req.url);
  console.log("Request Type:", req.method);
  next();
});
//push asset to project
cyclewayRouter.post("/addfeature", async (req, res, next) => {
  try {
    const {
      body: {
        asset_name,
        geometry,
        surveyorname,
        Rating_Dat,
        Potholes,
        surfaceCracking,
        qualityOfSinage,
        overhangingVegetation,
        widthRestrictions,
        qualityOfLighting,
        wornLines,
        Oper_statu,
        Asset_age,
        general_co,
        Overall_ra,
        Remain_lif,
      },
    } = req;

    const newCycleway = new Cycleway({
      asset_name,
      geometry,
      surveyorname,
      Rating_Dat,
      Potholes,
      surfaceCracking,
      qualityOfSinage,
      overhangingVegetation,
      widthRestrictions,
      qualityOfLighting,
      wornLines,
      Oper_statu,
      Asset_age,
      general_co,
      Overall_ra,
      Remain_lif,
    });
    const createdCycleway = await newCycleway.save();
    return res.status(201).send(createdCycleway.toJSON());
  } catch (err) {
    next(err);
  }
});
// add data of features to database
cyclewayRouter.post("/add", async (req, res, next) => {
  try {
    const {
      _id,
      asset_name,
      geometry,
      Rating_Dat,
      surveyorname,
      Potholes,
      surfaceCracking,
      qualityOfSinage,
      overhangingVegetation,
      widthRestrictions,
      qualityOfLightinging,
      wornLines,
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
      Potholes: Potholes,
      surfaceCracking: surfaceCracking,
      qualityOfSinage: qualityOfSinage,
      overhangingVegetation: overhangingVegetation,
      widthRestrictions: widthRestrictions,
      qualityOfLightinging: qualityOfLightinging,
      wornLines: wornLines,
      general_co: general_co,
      Oper_statu: Oper_statu,
      Asset_age: Asset_age,
      Overall_ra: Overall_ra,
      Remain_lif: Remain_lif,
    };

    Cycleway.updateOne({ _id }, newdata)
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
cyclewayRouter.get("/", (req, res, next) => {
  try {
    Cycleway.find({}, (err, data) => {
      if (err) {
        return next(err);
      }
      res.send(data);
    });
  } catch (err) {
    next(err);
  }
});
module.exports = cyclewayRouter;
