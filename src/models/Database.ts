import axios from "axios";
import { Printable } from "../interface/Printable";
import {
  DatabaseResponse,
  DatabaseResult,
  DatabasePropertyItem,
} from "../interface/Database";

export class Database implements Printable {
  private _response: DatabaseResponse = {
    id: "",
    title: "",
    url: "",
    archived: false,
  };

  async search(id: String): Promise<void> {
    const apiResponse = await axios.get(`/databases/${id}`);
    const dataResponse: DatabaseResult = apiResponse.data;

    const dataResponseFiltered = this.filterTypeSelect(dataResponse);

    this._response = {
      id: dataResponseFiltered.id,
      title: dataResponseFiltered.title[0].plain_text,
      url: dataResponseFiltered.url,
      archived: dataResponseFiltered.archived,
      properties: dataResponseFiltered.properties,
    };
  }

  filterTypeSelect(dataResponse: DatabaseResult): DatabaseResult {
    const dataResponseList: Array<DatabasePropertyItem> = [];
    const dataResponseCopy: DatabaseResult = Object.assign({}, dataResponse);

    for (let key in dataResponse.properties) {
      dataResponse.properties[key].property_name = key;
      if (dataResponse.properties[key].type === "select") {
        dataResponse.properties[key].property_value =
          dataResponse.properties[key].select.name;
        dataResponseList.push(dataResponse.properties[key]);
      }
    }

    dataResponseCopy.properties = dataResponseList;

    return dataResponseCopy;
  }

  get response() {
    return this._response;
  }

  showText(): void {
    console.log("Response", this.response);
  }
}
