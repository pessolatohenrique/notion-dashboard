import { DatabaseSummarized } from "./Database";

export interface IStasticProxy {
  generate(id: string, fromCache: boolean): Promise<DatabaseSummarized>;
}
