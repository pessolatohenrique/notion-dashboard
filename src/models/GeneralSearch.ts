import axios from "axios";
import { Printable } from "../interface/Printable";
import { SearchParams } from "../interface/SearchParams";
import { SearchResponse, ItemResult } from "../interface/SearchResponse";

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
  }

  showText(): void {
    console.log("Query:", this._query);
    console.log("Response: ", this._response);
  }
}
