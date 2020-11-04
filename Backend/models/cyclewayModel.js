const mongoose = require("mongoose");
const geometrySchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["LineString"],
    required: true,
  },
  coordinates: {
    type: [[Number]],
    required: true,
  },
});

const cyclewaySchema = new mongoose.Schema({
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
  Potholes: {
    type: Number,
    // required: [true, "Potholes is required"]
  },
  surfaceCracking: {
    type: Number,
    // required: [true, "surfaceCracking is required"]
  },
  qualityOfSinage: {
    type: Number,
    // required: [true, "Quality of sinage is required"]
  },
  overhangingVegetation: {
    type: Number,
    // required: [true, "Over hanging vegetation is required"]
  },
 
  widthRestrictions: {
    type: Number,
    // required: [true, "width restrictions is required"]
  },
  qualityOfLighting: {
    type: Number,
    // required: [true, "Quality of lighting is required"]
  },
  wornLines: {
    type: Number,
    // required: [true, "warn lines condition is required"]
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

const Cycleway = mongoose.model("Cycleway", cyclewaySchema);
module.exports = Cycleway;
