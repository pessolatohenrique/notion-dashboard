import { NextFunction, Request, Response } from "express";

import { DetailRequest } from "../interface";
import { Database } from "../models";
import { LogGenerator } from "../utils";

export class DatabaseController {
  static async show(
    req: Request<DetailRequest>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const databaseModel = new Database();
      await databaseModel.search(req.params.id);
      LogGenerator.printOut(databaseModel);
      return res.status(200).json(databaseModel.response);
    } catch (error) {
      return next(error);
    }
  }
}
