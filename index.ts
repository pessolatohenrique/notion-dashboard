// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

import * as cors from "cors";
import * as express from "express";

import RoutesWrapper from "./src/routes";
import log4js = require("log4js");

import { NextFunction, Request, Response } from "express";

import { RedisWrapper } from "./src/config";
import {
  APIError,
  LoggerHelper,
  RequestHelper,
  SwaggerHelper,
} from "./src/utils";

const app = express();
app.use(cors());

if (process.env.NODE_ENV !== "test") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log("Server Started");
    console.log("Example from dotenv: ", process.env.DB_USER);
  });
}

RequestHelper.initializeAxios();
new RedisWrapper();
RoutesWrapper.configure(app);

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
