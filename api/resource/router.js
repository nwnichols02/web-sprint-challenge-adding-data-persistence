// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Resource
    .getResource()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Resource
    .addResource(req.body)
    .then((newResource) => {
      res.status(200).json(newResource);
    })
    .catch(next);
});

module.exports = router;
