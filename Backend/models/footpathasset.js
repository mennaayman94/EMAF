const mongoose = require("mongoose");
const lineSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["LineString"],
   required: true
  },
  coordinates: {
    type: [[Number]],
    required: true
  }
});

const Schema = new mongoose.Schema({
  asset_name: {
    type: String,   //required: [true],
  },
  geometry: {
    type: lineSchema,
    //required: [true],
  },
surveyorname:{
type:String
},
Rating_Dat: {
    type: Date,
   // required: [true, "Date of aurvey is required"],
  },
  pothole: {
    type: Number,
   // required: [true, "Degree of pothole is required"],
  },
  cracks: {
    type: Number,
    //required: [true, "Degree of cracks is required"],
  },
  erosion: {
    type: Number,
   // required: [true, "Degree of erosion is required"],
  },
  slipperySurface: {
    type: Number,
   // required: [true, "Degree of slippery surface is required"],
  },

  fallenBranches: {
    type: Number,
    //required: [true, "Degree of fallen branches is required"],
  },
  QualityOfCurbing: {
    type: Number,
   // required: [true, "Quality degree of curbing is required"],
  },
  degreeOfCleanliness: {
    type: Number,
    ////required: [true, "Degree of cleanliness is required"],
  },
  conditionofDrains: {
    type: Number,
   // required: [true, "Drains' condition is required"],
  },
  pedestrians_Sainage_Condition: {
    type: Number,
   // required: [true, "Quality degree of pedestrians sinage is required"],
  },
  Oper_statu:{
type:String,
//required: [true, "Operation status is required"]
  },
  Asset_age:{
    type: Number,
    //required: [true, "Asset age is required"]
  },
  general_co: {
    type: Number,
    //required: [true, "General condition is required"]
  },
  Overall_ra:{
    type: Number,
    //required: [true, "Overall rate is required"]
  },
  Remain_lif:{
    type: Number,
    //required: [true, "Remaining life is required"]
  }
  
});
const FootPath = mongoose.model("FootPath", Schema);
module.exports = FootPath;
