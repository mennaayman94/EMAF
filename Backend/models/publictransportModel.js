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

const publictransportSchema = new mongoose.Schema({
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
  LevelOf_modal_integration_service: {
    type: Number,
    // required: [true,Level Of modal integration service is required]
  },
  bus_punctuality: {
    type: Number,
  },
  train_punctuality: {
    type: Number,
  },
  ferry_punctuality: {
    type: Number,
  },
  perceived_qualityof_service: {
    type: Number,
    // required: [true, "Perceived Quality Of service is required"]
  },
  acess_passenger_info: {
    type: Number,
    // required: [true, "acess_passenger_info is required"]
  },
  avail_infowith_ptservice: {
    type: Number,
    // required: [true, " avail_infowith_ptserviceis required"]
  },
  mobilityofInhabitant: {
    type: Number,
    // required: [true, "mobilityofInhabitant is required"]
  },
  passengerDemand: {
    type: Number,
    // required: [true, "Passenger Demand is required"]
  },
  serviceEffeciency: {
    type: Number,
    // required: [true, "Service effeciency is required"]
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

const PublicTransport = mongoose.model(
  "PublicTransport",
  publictransportSchema
);
module.exports = PublicTransport;
