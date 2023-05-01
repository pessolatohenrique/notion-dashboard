import axios from "axios";

import { mockSearchResponse } from "../../../__mocks__/models/Database";
import {
  mockApiPostResponse,
  mockDatabaseResult,
  mockListUngrouped,
  mockResultToMap,
} from "../../../__mocks__/models/Statistic";
import {
  DatabaseItemSummarized,
  DatabaseOptionsItem,
} from "../../../src/interface/Database";
import { Database } from "../../../src/models/Database";
import { Statistic } from "../../../src/models/Statistic";
import { AgroupHelper } from "../../../src/utils";

jest.mock("axios");

describe("Statistic Model", () => {
  let model: Statistic;
  let modelDatabase: Database;

  beforeEach(() => {
    model = new Statistic();
    modelDatabase = new Database();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should create a valid query", () => {
    const mockProperty: DatabaseOptionsItem = {
      id: "1",
      name: "property name",
      color: "#ffffff",
    };

    const expectedQuery = {
      filter: {
        property: mockProperty.name,
        select: {
          is_not_empty: true,
        },
      },
    };

    const actualQuery = model.createQuery(mockProperty);

    expect(actualQuery).toEqual(expectedQuery);
  });

  it("should summarize a list of grouped items", () => {
    const mainGroup = AgroupHelper.groupBy(
      mockListUngrouped(),
      "property_name"
    );

    const expectedSummary: DatabaseItemSummarized = {
      key: "state",
      values: [{ saopaulo: 3 }, { riodejaneiro: 1 }],
    };

    const actualSummary = model.summarize(mainGroup);
    expect(actualSummary).toEqual({ result: [expectedSummary] });
  });

  it("should map result list", () => {
    const result = model.mapResultList(mockResultToMap());

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty("properties");
  });
});
