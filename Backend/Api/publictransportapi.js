const express = require("express");
const publictransRouter = express.Router();
const Publictransport = require("../models/publictransportModel");
publictransRouter.use(function (req, res, next) {
  console.log("Time:", Date.now());
  console.log(req.url);
  console.log("Request Type:", req.method);
  next();
});
//push asset to project
publictransRouter.post("/addfeature", async (req, res, next) => {
  try {
    const {
      body: {
        asset_name,
        geometry,
        surveyorname,
        Rating_Dat,
        LevelOf_modal_integration_service,
        bus_punctuality,
        train_punctuality,
        ferry_punctuality,
        perceived_qualityof_service,
        acess_passenger_info,
        avail_infowith_ptservice,
        mobilityofInhabitant,
        passengerDemand,
        serviceEffeciency,
        Oper_statu,
        Asset_age,
        general_co,
        Overall_ra,
        Remain_lif,
      },
    } = req;

    const newPublictrans = new Publictransport({
      asset_name,
      geometry,
      surveyorname,
      Rating_Dat,
      LevelOf_modal_integration_service,
        bus_punctuality,
        train_punctuality,
        ferry_punctuality,
        perceived_qualityof_service,
        acess_passenger_info,
        avail_infowith_ptservice,
        mobilityofInhabitant,
        passengerDemand,
        serviceEffeciency,
      Oper_statu,
      Asset_age,
      general_co,
      Overall_ra,
      Remain_lif,
    });
    const createdPublictrans = await newPublictrans.save();
    return res.status(201).send(createdPublictrans.toJSON());
  } catch (err) {
    next(err);
  }
});
// add data of features to database
publictransRouter.post("/add", async (req, res, next) => {
  try {
    const {
      _id,
      asset_name,
      geometry,
      surveyorname,
      Rating_Dat,
      LevelOf_modal_integration_service,
      bus_punctuality,
      train_punctuality,
      ferry_punctuality,
      perceived_qualityof_service,
      acess_passenger_info,
      avail_infowith_ptservice,
      mobilityofInhabitant,
      passengerDemand,
      serviceEffeciency,
      Oper_statu,
      Asset_age,
      general_co,
      Overall_ra,
      Remain_lif,
    } = req.body;
    console.log(_id);
    const newdata = {
        asset_name:asset_name,
        geometry:geometry,
        surveyorname:surveyorname,
        Rating_Dat:Rating_Dat,
        LevelOf_modal_integration_service:LevelOf_modal_integration_service,
        bus_punctuality:bus_punctuality,
        train_punctuality:train_punctuality,
        ferry_punctuality:ferry_punctuality,
        perceived_qualityof_service:perceived_qualityof_service,
        acess_passenger_info:acess_passenger_info,
        avail_infowith_ptservice:avail_infowith_ptservice,
        mobilityofInhabitant:mobilityofInhabitant,
        passengerDemand:passengerDemand,
        serviceEffeciency:serviceEffeciency,
        Oper_statu:Oper_statu,
        Asset_age:Asset_age,
        general_co:general_co,
        Overall_ra:Overall_ra,
        Remain_lif:Remain_lif,
    };

    Publictransport.updateOne({ _id }, newdata)
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
publictransRouter.get("/", (req, res, next) => {
  try {
    Publictransport.find({}, (err, data) => {
      if (err) {
        return next(err);
      }
      res.send(data);
    });
  } catch (err) {
    next(err);
  }
});
module.exports = publictransRouter;
