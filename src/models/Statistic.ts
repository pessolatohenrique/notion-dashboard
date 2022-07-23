import axios from "axios";

import {
  DatabaseGroupItem,
  DatabaseOptionsItem,
  DatabaseQueryResult,
  DatabaseResult,
  DatabaseSummarized,
} from "../interface/Database";
import { Printable } from "../interface/Printable";
import { SearchParams } from "../interface/SearchParams";
import AgroupHelper from "../utils/AgroupHelper";
import { Database } from "./Database";

export class Statistic implements Printable {
  private _response: DatabaseSummarized = {
    result: [],
  };

  private databaseModel = new Database();

  async generate(id: string): Promise<void> {
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

    const ungroupedProperties = AgroupHelper.ungroupProperties(resultsMapped);

    const mainGroup = AgroupHelper.groupBy(
      ungroupedProperties,
      "property_name"
    );

    const summaryList = this.summarize(mainGroup);

    this._response = summaryList;
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

  summarize(listGrouped: Array<DatabaseGroupItem | any>) {
    const summaryList: DatabaseSummarized = { result: [] };
    for (const key in listGrouped) {
      const subGroup = AgroupHelper.groupBy(listGrouped[key], "property_value");
      const subGroupCounted = AgroupHelper.countGroupedBy(subGroup);
      summaryList.result.push({ key, values: subGroupCounted });
    }

    return summaryList;
  }

  get response() {
    return this._response;
  }

  showText(): void {
    console.log("Response", this.response);
  }
}
