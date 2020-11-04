const express = require("express");
const User = require("../models/usermodel");
const { JWT_SECRET } = require("../configuration");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const customError = require("../helpers/customError");
const _ = require("lodash");
const userRouter = express.Router();
userRouter.use(function (req, res, next) {
  console.log("Time:", Date.now());
  console.log(req.url);
  console.log("Request Type:", req.method);
  next();
});
const saltRound = 10;

// register
userRouter.post(
  "/register",

  async (req, res, next) => {
    try {
      const {
        body: { username, password, role, name },
      } = req;
      const newUser = new User({
        username,
        password,
        role,
        name,
      });

      // sanitize
      const createdUser = await newUser.save();
      const instance = _.omit(createdUser.toJSON(), "password");
      return res.status(201).send(instance);
    } catch (error) {
      next(error);
    }
  }
);
// userRouter.post("/register", async (req, res, next) => {
//   const token = req.headers.authorization;
//   jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
//     const _id = decoded._id;
//     const user = await User.findOne({ _id: _id }).exec();

//     if (user.role != "admin") {
//       throw new Error("User is not authorized");
//     } else {
//       try {
//         if (user.role != "admin") {
//           throw new Error("User is not authorized");
//         } else {
//           const { name, username, password, role } = req.body;
//           //const hashedpassword = await bcrypt.hash(password, saltRound);
//           const newuser = {
//             name: name,
//             username: username,
//             password: password,
//             role: role,
//           };
//           User.create(newuser)
//             .then((data) => {
//               res.send(data);
//             })
//             .catch((error) => {
//               req.statusCode = 405;
//               next(error);
//             });
//         }
//       } catch (error) {
//         req.statusCode = 405;
//         next(error);
//       }
//     }
//   });
// });

// userRouter.post("/login", async (req, res, next) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username: username, password: password });
//     //const isMatch = await bcrypt.compare(password, user.password);

//     if (user) {
//       return jwt.sign(
//         { _id: user.id },
//         process.env.JWT_SECRET,
//         { expiresIn: "60m" },
//         (err, token) => {
//           return res.send({ token });
//         }
//       );
//     }
//     //TODO pagination
//     const allprojects = await Project.find();
//     return res.status(200).send(allprojects);
//   } catch (error) {
//     next(error);
//   }
// });

// login
userRouter.post(
  "/login",

  async (req, res, next) => {
    const {
      body: { username, password },
    } = req;
    console.log(username);
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(500).send("username or password are incorrect");
      }
      const isMatch = await bcrypt.compare(password, user.toJSON().password);

      if (isMatch) {
        // generate token
        const sanitizedUser = _.omit(
          user,
          "password",
          "__v",

          "_id"
        );
        const id = user._id;
        const token = jwt.sign({ id }, JWT_SECRET, { expiresIn: "60m" });
        return res.status(200).send({ user: sanitizedUser, token });
      }
      throw new customError({
        message: "either username or password are wrong",
        status: 500,
      });
    } catch (err) {
      next(err);
    }
  }
);
//get all users
userRouter.get("/", (req, res, next) => {
  try {
    User.find(
      {},
      { name: 1, id: 1, username: 1, role: 1, password: 1 },
      (err, data) => {
        if (err) {
          return next(err);
        }
        res.send(data);
      }
    );
  } catch (err) {
    next(err);
  }
});
//delete user
userRouter.delete("/:id", (req, res, next) => {
  try {
    User.findByIdAndDelete({ _id: req.params.id }, async (err, data) => {
      if (err) {
        return next(err);
      } else {
        const users = await User.find();
        res.send(users);
      }
    });
  } catch (err) {
    next(err);
  }
});
//edit user
userRouter.patch("/:id", async (req, res, next) => {
  try {
    const update = {
      username: req.body.username,
      name: req.body.name,
      role: req.body.role,
    };
    await User.findByIdAndUpdate({ _id: req.params.id }, update, {
      runValidators: true,
    }).exec();

    const users = await User.find();

    res.send(users);
  } catch (error) {
    next(error);
  }
});
module.exports = userRouter;
