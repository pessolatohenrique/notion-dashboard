import { Router } from "express";

import databaseRoutes from "./database";
import searchRoutes from "./search";
import statisticRoutes from "./statistic";
import bodyParser = require("body-parser");

export default class RoutesWrapper {
  public static configure(app: Router) {
    app.use(bodyParser.json());
    app.use(searchRoutes);
    app.use(databaseRoutes);
    app.use(statisticRoutes);
  }
}
