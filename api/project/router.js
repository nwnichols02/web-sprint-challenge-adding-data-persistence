// build your `/api/projects` router here
const express = require("express");
const Project = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Project.getProject()
    .then((project) => {
      res.status(200).json(project);
    })
    .catch(next);
});

module.exports = router;