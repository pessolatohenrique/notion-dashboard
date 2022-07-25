import axios from "axios";

import {
  ItemResult,
  Printable,
  SearchParams,
  SearchResponse,
} from "../interface";
import { APIError } from "../utils/ErrorHandle";

export class GeneralSearch implements Printable {
  private _query: SearchParams = {
    filter: {
      property: "object",
      value: "database",
    },
  };

  private _response: SearchResponse = { results: [] };

  get response() {
    return this._response;
  }

  async searchAndMap(): Promise<void> {
    try {
      const apiResponse = await axios.post(`/search`, { ...this._query });
      this._response = {
        results: [...apiResponse.data.results].map((item: ItemResult) => {
          return {
            id: item.id,
            title: item.title[0].plain_text,
            url: item.url,
            archived: item.archived,
          };
        }),
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new APIError(error.message, 400, error.message);
      }
      throw new APIError();
    }
  }

  showText(): void {
    console.log("Query:", this._query);
    console.log("Response: ", this._response);
  }
}
