const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");
import log4js = require("log4js");

import { Request, Response, NextFunction } from "express";
import RequestHelper from "./src/utils/RequestHelper";
import SwaggerHelper from "./src/utils/SwaggerHelper";
import LoggerHelper from "./src/utils/LoggerHelper";
import RedisWrapper from "./src/config/RedisWrapper";
import { APIError } from "./src/utils/ErrorHandle";

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

SwaggerHelper.initialize(app);
LoggerHelper.initialize();

app.use(
  async (error: APIError, req: Request, res: Response, next: NextFunction) => {
    const logger = log4js.getLogger();

    logger.error(error);

    res.status(error.getStatusCode()).json(error);
    return next();
  }
);

module.exports = app;
