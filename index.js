require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const middlewareCheckToken = require("./src/middleware/check-token");
const rootRouter = require("./src/routers");
const PORT = process.env.PORT_BACK_END || 3302;

const app = express();

app.use(bodyParser.json()); // parse data request by json

app.get("/", (req, res) => res.send("hello world"));
app.use("/task", middlewareCheckToken, rootRouter.taskRouter); // check token when work width /task

app.listen(PORT, () => {
  console.log(`server back-end running: ${PORT}`);
});
