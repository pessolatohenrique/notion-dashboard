import axios from "axios";

export default class RequestHelper {
  public static initializeAxios(): void {
    axios.defaults.baseURL = process.env.NOTION_API_URL;
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Authorization"] =
      process.env.NOTION_TOKEN || "";
    axios.defaults.headers.common["Notion-Version"] =
      process.env.NOTION_VERSION || "";
  }
}
