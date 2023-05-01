import axios from "axios";

import { mockSearchResponse } from "../../../__mocks__/models/GeneralSearch";
import { GeneralSearch } from "../../../src/models/GeneralSearch";
import { APIError } from "../../../src/utils/";

jest.mock("axios");

describe("GeneralSearch Model", () => {
  let model: GeneralSearch;

  beforeEach(() => {
    model = new GeneralSearch();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should search and map results correctly", async () => {
    axios.post = jest.fn().mockResolvedValueOnce(mockSearchResponse());

    await model.searchAndMap();

    model.showText();

    expect(model.response).toEqual({
      results: [
        {
          id: 1,
          title: "Item 1",
          url: "http://example.com/item/1",
          archived: false,
        },
        {
          id: 2,
          title: "Item 2",
          url: "http://example.com/item/2",
          archived: true,
        },
      ],
    });
  });

  it("should throw an APIError when the API call fails", async () => {
    const mockApiError = new Error("API error");
    axios.post = jest.fn().mockRejectedValueOnce(mockApiError);

    await expect(model.searchAndMap()).rejects.toThrowError(
      new APIError(mockApiError.message, 400, mockApiError.message)
    );
  });
});
