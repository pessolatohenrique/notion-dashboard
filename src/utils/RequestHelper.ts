import axios from "axios";

export default class RequestHelper {
  public static initializeAxios(): void {
    axios.defaults.baseURL = process.env.NOTION_API_URL;
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers.post["Authorization"] =
      process.env.NOTION_TOKEN || "";
    axios.defaults.headers.post["Notion-Version"] =
      process.env.NOTION_VERSION || "";
  }
}
