import { APIError } from "../../../src/utils/ErrorHandle";

describe("ErrorHandle Util", () => {
  it("should create an object error with parameters", () => {
    const error = new APIError("Test Error", 404, "Test error description");
    const statusGet = error.getStatusCode();
    expect(error.name).toBe("Test Error");
    expect(statusGet).toBe(404);
  });

  it("should create an object error without parameters", () => {
    const error = new APIError();
    const statusGet = error.getStatusCode();
    expect(error.name).toBe("Internal Server Error");
    expect(statusGet).toBe(500);
  });
});
