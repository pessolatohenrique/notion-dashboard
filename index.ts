const express = require("express");
const app = express();
const routes = require("./src/routes");
import RequestHelper from "./src/utils/RequestHelper";
require("dotenv").config();

app.listen(3000, () => {
  console.log("Server Started");
  console.log("Example from dotenv: ", process.env.DB_USER);
});

RequestHelper.initializeAxios();
routes(app);

module.exports = app;
