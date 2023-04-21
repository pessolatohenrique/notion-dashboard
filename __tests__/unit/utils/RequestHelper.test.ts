import axios from "axios";

import RequestHelper from "../../../src/utils/RequestHelper";

describe("RequestHelper Util", () => {
  it("should initialize axios with envs", () => {
    process.env.NOTION_API_URL = "https://notion-api.com";
    process.env.NOTION_TOKEN = "123456";
    process.env.NOTION_VERSION = "2022-01-01";

    RequestHelper.initializeAxios();

    expect(axios.defaults.baseURL).toBe(process.env.NOTION_API_URL);
    expect(axios.defaults.headers.common["Content-Type"]).toBe(
      "application/json"
    );
    expect(axios.defaults.headers.common["Authorization"]).toBe(
      process.env.NOTION_TOKEN
    );
    expect(axios.defaults.headers.common["Notion-Version"]).toBe(
      process.env.NOTION_VERSION
    );
  });

  it("should initialize axios with envs when token and version are empty", () => {
    process.env.NOTION_API_URL = "https://notion-api.com";
    delete process.env.NOTION_TOKEN;
    delete process.env.NOTION_VERSION;

    RequestHelper.initializeAxios();

    expect(axios.defaults.baseURL).toBe(process.env.NOTION_API_URL);
    expect(axios.defaults.headers.common["Content-Type"]).toBe(
      "application/json"
    );
    expect(axios.defaults.headers.common["Authorization"]).toBe("");
    expect(axios.defaults.headers.common["Notion-Version"]).toBe("");
  });
});
