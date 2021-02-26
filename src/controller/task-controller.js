const taskModule = require("../module/taskModule");

const getListTask = (req, res) => {
  try {
    const data = taskModule.getListTask();
    res.status(200);
    res.json({ data });
  } catch (e) {
    res.status(201);
    res.message("Fail to get list");
  }
};

const getTaskById = (req, res) => {
  try {
    const idSender = req.params.id;
    const data = taskModule.getTaskById(idSender);
    res.json({ data });
  } catch (e) {
    res.status(201);
    res.send("Fail to get task by id");
  }
};

const createNewTask = (req, res) => {
  try {
    const task = req.body;
    const result = taskModule.createNewTask(task);
    if (result) {
      res.send({ message: "Create task success", status: 0 });
    } else {
      res.status(502);
      res.send({ message: "Cant create new task" });
    }
  } catch (e) {
    res.status(502);
    res.send("Fail to create new task");
  }
};

module.exports = {
  getListTask,
  getTaskById,
  createNewTask,
};
