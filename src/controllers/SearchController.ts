import { Request, Response } from "express";
import axios from "axios";
import { SearchParams } from "../interface/SearchParams";
import { SearchResponse, ItemResult } from "../interface/SearchResponse";

export class SearchController {
  static async index(req: Request, res: Response): Promise<Response> {
    try {
      const filterQuery: SearchParams = {
        filter: {
          property: "object",
          value: "database",
        },
      };

      const apiResponse = await axios.post(`/search`, { ...filterQuery });
      const mappedResponse: SearchResponse = {
        results: [...apiResponse.data.results].map((item: ItemResult) => {
          return {
            id: item.id,
            title: item.title[0].plain_text,
            url: item.url,
            archived: item.archived,
          };
        }),
      };

      return res.status(200).json(mappedResponse);
    } catch (e) {
      console.log(e);
      return res.status(400).json(e);
    }
  }
}
