const express = require("express");
const stormwaterRouter = express.Router();
const StormWater = require("../models/stormwaterModel");
stormwaterRouter.use(function (req, res, next) {
  console.log("Time:", Date.now());
  console.log(req.url);
  console.log("Request Type:", req.method);
  next();
});
//push asset to project
stormwaterRouter.post("/addfeature", async (req, res, next) => {
  try {
    const {
      body: {
        asset_name,
        geometry,
        surveyorname,
        Rating_Dat,
        maintenance_of_hole,
        groutmiss_around,
        exposed_rebar,
        hydrogensulfide_damage,
        hole_bricks_missing,
        infiltration_around_barreljoints,
        object_restrict_flow,
        checklid_frame_forcracks,
        Oper_statu,
        Asset_age,
        general_co,
        Overall_ra,
        Remain_lif
      },
    } = req;

    const newStormwater = new StormWater({
        asset_name,
        geometry,
        surveyorname,
        Rating_Dat,
        maintenance_of_hole,
        groutmiss_around,
        exposed_rebar,
        hydrogensulfide_damage,
        hole_bricks_missing,
        infiltration_around_barreljoints,
        object_restrict_flow,
        checklid_frame_forcracks,
        Oper_statu,
        Asset_age,
        general_co,
        Overall_ra,
        Remain_lif
    });
    const createdStormwater = await newStormwater.save();
    return res.status(201).send(createdStormwater.toJSON());
  } catch (err) {
    next(err);
  }
});
// add data of features to database
stormwaterRouter.post("/add", async (req, res, next) => {
  try {
    const {
      _id,
      asset_name,
        geometry,
        surveyorname,
        Rating_Dat,
        maintenance_of_hole,
        groutmiss_around,
        exposed_rebar,
        hydrogensulfide_damage,
        hole_bricks_missing,
        infiltration_around_barreljoints,
        object_restrict_flow,
        checklid_frame_forcracks,
        Oper_statu,
        Asset_age,
        general_co,
        Overall_ra,
        Remain_lif
    } = req.body;
    console.log(_id);
    const newdata = {
        asset_name:asset_name,
        geometry:geometry,
        surveyorname:surveyorname,
        Rating_Dat:Rating_Dat,
        maintenance_of_hole:maintenance_of_hole,
        groutmiss_around:groutmiss_around,
        exposed_rebar:exposed_rebar,
        hydrogensulfide_damage:hydrogensulfide_damage,
        hole_bricks_missing:hole_bricks_missing,
        infiltration_around_barreljoints:infiltration_around_barreljoints,
        object_restrict_flow:object_restrict_flow,
        checklid_frame_forcracks:checklid_frame_forcracks,
        Oper_statu:Oper_statu,
        Asset_age:Asset_age,
        general_co:general_co,
        Overall_ra:Overall_ra,
        Remain_lif:Remain_lif
    };

    StormWater.updateOne({ _id }, newdata)
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
stormwaterRouter.get("/", (req, res, next) => {
  try {
    StormWater.find({}, (err, data) => {
      if (err) {
        return next(err);
      }
      res.send(data);
    });
  } catch (err) {
    next(err);
  }
});
module.exports =stormwaterRouter;