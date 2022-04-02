import { Request, Response } from "express";
import { GeneralSearch } from "../models/GeneralSearch";
import { LogGenerator } from "../utils/LogGenerator";

export class SearchController {
  static async index(req: Request, res: Response): Promise<Response> {
    try {
      const generalSearch = new GeneralSearch();
      await generalSearch.searchAndMap();
      LogGenerator.printOut(generalSearch);
      return res.status(200).json(generalSearch.response);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}
