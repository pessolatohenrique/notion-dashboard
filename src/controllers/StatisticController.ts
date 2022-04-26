import { Request, Response } from "express";
import { DetailRequest } from "../interface/DetailRequest";
import { Statistic } from "../models/Statistic";

export class StatisticController {
  static async index(
    req: Request<DetailRequest>,
    res: Response
  ): Promise<Response> {
    try {
      const statisticModel = new Statistic();
      await statisticModel.generate(req.params.id);
      return res.status(200).json(statisticModel.response);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}
