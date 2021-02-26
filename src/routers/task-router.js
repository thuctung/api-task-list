const express = require("express");
const taskRouter = express.Router();
const taskController = require("../controller/task-controller");

taskRouter.get("/", taskController.getListTask);

taskRouter.get("/:id", taskController.getTaskById);

taskRouter.post("/", taskController.createNewTask);

module.exports = taskRouter;
