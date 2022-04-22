// build your `/api/projects` router here
const express = require("express");
const Project = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Project.getProject()
    .then((projects) => {
      projects.map((project) => {
        project.project_completed === 0
          ? (project.project_completed = false)
          : (project.project_completed = true);
      });
      res.status(200).json(projects);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
    Project.addProject(req.body)
    .then((newProject) => {
      res
        .status(201)
        .json({
          ...newProject,
          project_completed: Boolean(newProject.project_completed),
        });
    })
    .catch(next)
});

module.exports = router;
