const mongoose = require("mongoose");
const geometrySchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const stormwaterSchema = new mongoose.Schema({
  asset_name: {
    type: String,
    // required: [true,"Asset name is required"]
  },
  surveyorname: {
    type: String,
  },
  geometry: {
    type: geometrySchema,
    required: true,
  },
  Rating_Dat: {
    type: Date,
    // required: [true, "Date of saurvey is required"]
  },
  maintenance_of_hole: {
    type: Number,
    // required: [true, maintenance_of_hole is required]
  },
  groutmiss_around: {
    type: Number,
  //  required: true
  },
  exposed_rebar: {
    type: Number,
   // required: true
  },
  hydrogensulfide_damage: {
    type: Number,
   // required: true
  },
  hole_bricks_missing: {
    type: Number,
    //required: true,
  },

  infiltration_around_barreljoints: {
    type: Number,
    //required: true
  },
  object_restrict_flow: {
    type: Number,
   // required: true
  },
  checklid_frame_forcracks: {
    type: Number,
    //required: true
  },
  Oper_statu: {
    type: String,
    //required: [true, "Operation status is required"]
  },
  Asset_age: {
    type: Number,
    //required: [true, "Asset age is required"]
  },
  general_co: {
    type: Number,
    //required: [true, "General condition is required"]
  },
  Overall_ra: {
    type: Number,
    //required: [true, "Overall rate is required"]
  },
  Remain_lif: {
    type: Number,
    //required: [true, "Remaining life is required"]
  }
});

const StormWater = mongoose.model("StormWater", stormwaterSchema);
module.exports = StormWater;
