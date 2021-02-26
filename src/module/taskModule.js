const taskDummy = require("../dummy-data/tasks");

const getListTask = () => {
  return taskDummy;
};

const getTaskById = (id) => {
  return taskDummy.find((item) => item.id === id) || [];
};

const createNewTask = (task) => {
  return taskDummy.push(task);
};

module.exports = {
  getListTask,
  getTaskById,
  createNewTask,
};
