const mongoose = require("mongoose");
const express = require("express");
const Project = require("../models/projectmodel");
const projectRouter = express.Router();

//Get All Projects

projectRouter.get("/", async (req, res, next) => {
  try {
    const projects = await Project.find({});
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
});

//Add Project
projectRouter.post("/add", async (req, res, next) => {
  try {
    const {
      category,
      name,
      owner,
      manager,
      location,
      start_date,
      end_date,
      status,
    } = req.body;
    const newProject = new Project({
      category,
      name,
      owner,
      manager,
      location,
      start_date,
      end_date,
      status,
    });
    const savedProject = await newProject.save();
    res.status(201).send(savedProject.toJSON());
  } catch (err) {
    next(err);
  }
});

//Edit Project
projectRouter.patch("/edit/:id", async (req, res, next) => {
  try {
    const update = {
      category: req.body.category,
      name: req.body.name,
      owner: req.body.owner,
      manager: req.body.manager,
      location: req.body.location,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      status: req.body.status,
    };
    await Project.findByIdAndUpdate({ _id: req.params.id }, update, {
      runValidators: true,
    }).exec();

    const projects = await Project.find();

    res.send(projects);
  } catch (error) {
    next(error);
  }
  // const updates = Object.keys(req.body);
  // const allowedUpdates = [
  //   "category",
  //   "name",
  //   "owner",
  //   "manager",
  //   "location",
  //   "start_date",
  //   "end_date",
  //   "status",
  // ];
  // const isValidOperation = updates.every((update) =>
  //   allowedUpdates.includes(update)
  // );
  // if (!isValidOperation) return new Error("Invalid updates !");
  // try {
  //   const updatedProject = await Project.findByIdAndUpdate(
  //     req.params.id,
  //     req.body,
  //     { new: true, runValidators: true, useFindAndModify: false }
  //   );
  //   if (!updatedProject) return new Error("Project Not Found");
  //   res.status(201).send(updatedProject);
  // } catch (error) {
  //   //next(error)
  //   res.status(400).send(error);
  // }
});

//Get A Project By ID

projectRouter.get("/:id", async (req, res, next) => {
  try {
    const project = await Project.find({ _id: req.params.id });
    if (!project) return new Error("Project Not Found");
    res.status(200).send(project);
  } catch (err) {
    res.status(400).send(err);
  }
});

projectRouter.get("/delete/:id",async (req,res,next)=>{
  const project = await Project.findOne({_id : req.params.id})
    if(project)
    {
        Project.deleteOne(project, function (err) {
            if(err) next(err);
            res.status(201).send("project is deleted successfully")
            
          });
    }else{
        res.status(401).send("project is not found")
    }
})

module.exports = projectRouter;
