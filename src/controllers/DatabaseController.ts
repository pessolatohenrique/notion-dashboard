import { Request, Response, NextFunction } from "express";
import { DetailRequest } from "../interface/DetailRequest";
import { Database } from "../models/Database";
import { LogGenerator } from "../utils/LogGenerator";
import { APIError } from "../utils/ErrorHandle";

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
