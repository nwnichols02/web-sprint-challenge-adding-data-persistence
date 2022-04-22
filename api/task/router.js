// build your `/api/tasks` router here
const express = require("express");
const Task = require("./model");
const Project = require("../project/model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.getTask();
    const projects = await Project.getProject();
    let newTaskList = [];
    for (const task of tasks) {
      let projectForTask = projects.find(
        (item) => item.project_id === task.project_id
      );
      if (projectForTask) {
        newTaskList.push({
          task_id: task.task_id,
          task_description: task.task_description,
          task_notes: task.task_notes,
          task_completed: Boolean(task.task_completed),
          project_name: projectForTask.project_name,
          project_description: projectForTask.project_description,
        });
      } else {
        newTaskList.push(task);
      }
    }
    res.status(200).json(newTaskList);
  } catch (err) {
    next(err);
  }
});

router.post("/", (req, res, next) => {
  Task.addTask(req.body)
    .then((newTask) => {
      let response = {
        ...newTask,
        task_completed: Boolean(newTask.task_completed),
      };
      res.status(201).json(response);
    })
    .catch(next);
});

module.exports = router;
