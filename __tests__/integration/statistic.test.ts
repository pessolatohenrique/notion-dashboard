import app = require("../../index");
import * as request from "supertest";

describe("GET /statistic - show statistics from database", () => {
  it("should show detail when exists", async () => {
    const result = await request(app).get(
      "/statistic/0c72c795-7b93-4de7-8e34-758490319795"
    );
    expect(result.statusCode).toEqual(200);
    expect(result.text).toContain("id");
  });

  it("should show detail when exists with cache flag", async () => {
    const result = await request(app).get(
      "/statistic/0c72c795-7b93-4de7-8e34-758490319795?fromCache=true"
    );
    expect(result.statusCode).toEqual(200);
    expect(result.text).toContain("id");
  });

  it("should not found when id is empty", async () => {
    const result = await request(app).get("/database");
    expect(result.statusCode).toEqual(404);
  });

  it("should show no content when database not exists", async () => {
    const result = await request(app).get("/statistic/aaaaa");
    expect(result.statusCode).toEqual(204);
  });

  it("should show no content when database not exists with cache flag", async () => {
    const result = await request(app).get("/statistic/aaaaa?fromCache=true");
    expect(result.statusCode).toEqual(204);
  });
});
