// build your `/api/tasks` router here
const express = require("express");
const Task = require("./model");
const router = express.Router();

router.get("/", async (req, res) => {
    const tasks = await Task.getTask()
    const tasksToProcess = tasks.map(task => {
        return {...task, task_completed: Boolean(task.task_completed)}
    })
    res.json(tasksToProcess);
//   Task
//     .getTask()
//     .then((tasks) => {
//       res.status(200).json(tasks);
//     })
//     .catch(next);
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