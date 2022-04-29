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

    const ungroupedProperties: Array<any> = this.ungroupProperties(
      resultsMapped
    );

    const mainGroup = this.groupBy(ungroupedProperties, "property_name");
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

  // colocar em utils
  groupBy(objectList: any, property: string) {
    const result = objectList.reduce(function (list: any, key: any) {
      list[key[property]] = list[key[property]] || [];
      list[key[property]].push(key);
      return list;
    }, Object.create(null));

    return result;
  }

  // colocar em utils
  countGroupedBy(object: any) {
    const listCounted = [];
    for (const key in object) {
      // if (object.hasOwnProperty(key)) {
      const element = object[key];
      listCounted.push({ [element[0].property_value]: element.length });
      // }
    }

    return listCounted;
  }

  // colocar em utils
  ungroupProperties(list: Array<any>) {
    const ungroupedProperties: Array<any> = [];
    [...list].forEach((item) => {
      ungroupedProperties.push(...item.properties);
    });

    return ungroupedProperties;
  }

  summarize(listGrouped: Array<any>) {
    const summaryList = [];
    for (const key in listGrouped) {
      const subGroup = this.groupBy(listGrouped[key], "property_value");
      const subGroupCounted = this.countGroupedBy(subGroup);
      summaryList.push({ key, values: subGroupCounted });
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
