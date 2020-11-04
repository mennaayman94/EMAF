const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
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

const Schema = new mongoose.Schema({
  category: {
    type: String,
  },
  name: {
    type: String,
  },
  owner: {
    type: String,
  },
  manager: {
    type: String,
  },
  location: {
    type: pointSchema,
    //required: true
  },
  start_date: {
    type: Date,
  },
  end_date: {
    type: Date,
  },
  status: {
    type: String,
  },
  employees: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Project", Schema);
