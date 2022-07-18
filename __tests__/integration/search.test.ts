import app = require("../../index");
import * as request from "supertest";

describe("GET /search - list all notion's databases", () => {
  it("should list all notion's database", async () => {
    const result = await request(app).get("/search");
    expect(result.statusCode).toEqual(200);
    expect(result.text).toContain("results");
  });

  it("should list all notion's database when exist cache flag", async () => {
    const result = await request(app).get("/search?fromCache=true");
    expect(result.statusCode).toEqual(200);
    expect(result.text).toContain("results");
  });
});
