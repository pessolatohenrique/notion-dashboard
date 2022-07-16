import fs = require("fs");
import swaggerUi = require("swagger-ui-express");
import { Router } from "express";

export default class SwaggerHelper {
  public static initialize(app: Router): void {
    const swaggerFile: any = process.cwd() + "/swagger.json";
    const swaggerData: any = fs.readFileSync(swaggerFile, "utf8");
    const swaggerDocument = JSON.parse(swaggerData);

    app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
}
