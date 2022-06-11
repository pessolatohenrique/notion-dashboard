const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");
import RequestHelper from "./src/utils/RequestHelper";
import RedisWrapper from "./src/config/RedisWrapper";
require("dotenv").config();

const app = express();
app.use(cors());

app.listen(3000, () => {
  console.log("Server Started");
  console.log("Example from dotenv: ", process.env.DB_USER);
});

RequestHelper.initializeAxios();
new RedisWrapper();
routes(app);

module.exports = app;
