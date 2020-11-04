const bcrypt = require("bcrypt");
const _ = require("lodash");
const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: [true, "Name is not available"],
    minlength: 4,
    maxlength: 15,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username is not available"],
    minlength: 3,
    maxlength: 20,
  },
  password: {
    type: String,
    unique: true,
    validate: {
      validator: function (v) {
        return /[A-Z]/.test(v);
      },
      message: "password must have at least one uppercase letter",
    },
    required: [true, "password is required"],
  },
  role: {
    required: true,
    type: String,
  },
  projects: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  },
});

//presave
Schema.pre("save", async function () {
  const userdoc = this;
  console.log("password:" + userdoc.password);
  //hashing
  const hashed = await bcrypt.hash(userdoc.password, 10);
  userdoc.password = hashed;
  console.log("this is presave");
});

const User = mongoose.model("User", Schema);
module.exports = User;
