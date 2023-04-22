import axios from "axios";

import { mockSearchResponse } from "../../../__mocks__/models/Database";
import { Database } from "../../../src/models/Database";
import { APIError } from "../../../src/utils/";

jest.mock("axios");

describe("Database Model", () => {
  it("should search with no empty result", async () => {
    const database = new Database();
    axios.get = jest.fn().mockResolvedValueOnce(mockSearchResponse());

    await database.search("1234");
    await database.showText();

    expect(database.response.id).toBe("1234");
    expect(database.response.title).toBe("Séries e filmes");
    expect(database.response.properties?.length).toBe(2);
  });

  it("should search with empty result", async () => {
    const database = new Database();
    axios.get = jest.fn().mockResolvedValueOnce(null);

    await expect(database.search("1234")).rejects.toThrow(
      new APIError("No content", 204)
    );
  });

  it("should search with endpoint error", async () => {
    const error = new Error("Bad Request");
    const database = new Database();
    axios.get = jest.fn().mockRejectedValueOnce(error);

    await expect(database.search("1234")).rejects.toThrow(new APIError());
  });
});
