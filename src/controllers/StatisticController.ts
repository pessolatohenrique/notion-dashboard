import { Request, Response, NextFunction } from "express";
import { DetailRequest } from "../interface/DetailRequest";
import { Statistic } from "../models/Statistic";
import RedisWrapper from "../config/RedisWrapper";
import { DatabaseSummarized } from "../interface/Database";

export class StatisticController {
  static async index(
    req: Request<DetailRequest>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const statisticModel = new Statistic();

      const { fromCache } = req.query;
      const redisWrapper = new RedisWrapper<DatabaseSummarized>();

      const cacheKey = `notion:statistic:${req.params.id}`;
      const cacheValue = await redisWrapper.isResultInCache(
        Boolean(fromCache),
        cacheKey
      );

      if (cacheValue) {
        const cacheValueParsed = JSON.parse(cacheValue);
        return res.status(200).json(cacheValueParsed);
      }

      await statisticModel.generate(req.params.id);
      redisWrapper.setWithParse(cacheKey, statisticModel.response);
      return res.status(200).json(statisticModel.response);
    } catch (error) {
      return next(error);
    }
  }
}
