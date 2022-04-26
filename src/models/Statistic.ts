import axios from "axios";
import { Printable } from "../interface/Printable";
import { Database } from "./Database";
import {
  DatabaseResponse,
  DatabaseResult,
  DatabasePropertyItem,
  DatabaseOptionsItem,
  DatabaseQueryResult,
} from "../interface/Database";
import { SearchParams } from "../interface/SearchParams";

export class Statistic implements Printable {
  private _response: any = {
    id: "",
    title: "",
    url: "",
    archived: false,
  };

  private defaultSearchQuery: SearchParams = {
    filter: {
      property: "",
      select: {
        is_not_empty: true,
      },
    },
  };

  private databaseModel = new Database();

  async generate(id: String): Promise<void> {
    const databaseModel = new Database();
    await databaseModel.search(id);
    const databaseResponse = databaseModel.response;

    if (!databaseResponse.properties) {
      throw new Error("Não há dados associados");
    }

    const baseSearch = this.createQuery(databaseResponse.properties[0]);
    const apiResponse = await axios.post(`/databases/${id}/query`, baseSearch);
    const dataResponse: DatabaseQueryResult = apiResponse.data;

    const resultsMapped = this.mapResultList(dataResponse.results);

    this._response = resultsMapped;
  }

  mapResultList = (results: Array<DatabaseResult>) => {
    const resultsMapped = [...results].map((item: DatabaseResult) => {
      const newItem = this.databaseModel.filterTypeSelect(item);
      return newItem;
    });

    return resultsMapped;
  };

  createQuery(property: DatabaseOptionsItem): SearchParams {
    const search: SearchParams = {
      filter: {
        property: property.name,
        select: {
          is_not_empty: true,
        },
      },
    };

    return search;
  }

  get response() {
    return this._response;
  }

  showText(): void {
    console.log("Response", this.response);
  }
}
