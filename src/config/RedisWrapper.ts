import { createClient, RedisClientType } from "redis";

export default class RedisWrapper<T> {
  public client: RedisClientType;

  constructor() {
    this.client = createClient({
      url: process.env.REDIS_HOST,
      password: process.env.REDIS_PASSWORD,
    });

    this.client.connect();
  }

  async isResultInCache(fromCache: boolean, key: string): Promise<string> {
    const cacheValue = await this.client.get(key);

    if (!cacheValue || !fromCache) return "";
    return cacheValue;
  }

  async setWithParse(key: string, value: T) {
    this.client.set(key, JSON.stringify(value));
  }
}
