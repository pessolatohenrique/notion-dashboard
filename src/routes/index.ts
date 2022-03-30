import { Router } from "express";
import searchRoutes from "./search";
import authorRoutes from "./author";
const bodyParser = require("body-parser");

module.exports = (app: Router) => {
  app.use(bodyParser.json());
  app.use(searchRoutes);
  app.use(authorRoutes);
};
