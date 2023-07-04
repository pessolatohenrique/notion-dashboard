import { RedisWrapper } from "../config";
import { DatabaseSummarized } from "../interface";
import { IStasticProxy } from "../interface/IStatistic";
import { Statistic } from "./Statistic";

export class StatisticProxy implements IStasticProxy {
  private service;

  constructor() {
    this.service = new Statistic();
  }

  async generate(id: string, fromCache: boolean): Promise<DatabaseSummarized> {
    const redisWrapper = new RedisWrapper<DatabaseSummarized>();
    const cacheKey = `notion:statistic:${id}`;

    const cacheValue = await redisWrapper.isResultInCache(
      Boolean(fromCache),
      cacheKey
    );

    if (cacheValue) {
      const cacheValueParsed = JSON.parse(cacheValue);
      return cacheValueParsed;
    }

    await this.service.generate(id);
    redisWrapper.setWithParse(cacheKey, this.service.response);

    return this.service.response;
  }
}
