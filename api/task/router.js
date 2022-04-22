// build your `/api/tasks` router here
const express = require("express");
const Task = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Task
    .getTask()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Task
    .addTask(req.body)
    .then((newTask) => {
        let response = {
        ...newTask, 
        task_completed: Boolean(newTask.task_completed)
    };
      res.status(201).json(response);
    })
    .catch(next);
});

module.exports = router;