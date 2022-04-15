import { Request, Response } from "express";
import { DetailRequest } from "../interface/DetailRequest";
import { Database } from "../models/Database";
import { LogGenerator } from "../utils/LogGenerator";

export class DatabaseController {
  static async show(
    req: Request<DetailRequest>,
    res: Response
  ): Promise<Response> {
    try {
      const databaseModel = new Database();
      await databaseModel.search(req.params.id);
      LogGenerator.printOut(databaseModel);
      return res.status(200).json(databaseModel.response);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}
