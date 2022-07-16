import { Router } from "express";
import searchRoutes from "./search";
import databaseRoutes from "./database";
import statisticRoutes from "./statistic";
const bodyParser = require("body-parser");

module.exports = (app: Router) => {
  app.use(bodyParser.json());
  app.use(searchRoutes);
  app.use(databaseRoutes);
  app.use(statisticRoutes);
};
