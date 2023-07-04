import { NextFunction, Request, Response } from "express";

import { RedisWrapper } from "../config";
import { DatabaseSummarized, DetailRequest } from "../interface";
import { Statistic } from "../models";
import log4js = require("log4js");
import { StatisticProxy } from "../models/StatisticProxy";

export class StatisticController {
  static async index(
    req: Request<DetailRequest>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const statisticProxy = new StatisticProxy();

      const { fromCache } = req.query;
      const { id } = req.params;

      const fromCacheBoolean = Boolean(fromCache);

      const result = await statisticProxy.generate(id, fromCacheBoolean);

      return res.status(200).json(result);
    } catch (error) {
      console.log("error:", error);
      return next(error);
    }
  }
}
