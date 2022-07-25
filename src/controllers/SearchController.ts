import { NextFunction, Request, Response } from "express";

import { RedisWrapper } from "../config";
import { SearchResponse } from "../interface";
import { GeneralSearch } from "../models";
import { LogGenerator } from "../utils";

export class SearchController {
  static async index(req: Request, res: Response, next: NextFunction) {
    try {
      const { fromCache } = req.query;
      const redisWrapper = new RedisWrapper<SearchResponse>();

      const cacheKey = `notion:search:${process.env.NOTION_TOKEN}`;
      const cacheValue = await redisWrapper.isResultInCache(
        Boolean(fromCache),
        cacheKey
      );

      if (cacheValue) {
        const cacheValueParsed = JSON.parse(cacheValue);
        return res.status(200).json(cacheValueParsed);
      }

      const generalSearch = new GeneralSearch();
      await generalSearch.searchAndMap();
      LogGenerator.printOut(generalSearch);

      redisWrapper.setWithParse(cacheKey, generalSearch.response);
      return res.status(200).json(generalSearch.response);
    } catch (error) {
      return next(error);
    }
  }
}
