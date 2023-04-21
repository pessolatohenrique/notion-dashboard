import AgroupHelper from "../../../src/utils/AgroupHelper";

describe("AgroupHelper Util", () => {
  it("should return an object grouped by property", () => {
    const objectList = [
      { id: 1, name: "John" },
      { id: 2, name: "Mary" },
      { id: 3, name: "John" },
      { id: 4, name: "Peter" },
      { id: 5, name: "Mary" },
    ];

    const result = AgroupHelper.groupBy(objectList, "name");

    expect(result).toEqual({
      John: [
        { id: 1, name: "John" },
        { id: 3, name: "John" },
      ],
      Mary: [
        { id: 2, name: "Mary" },
        { id: 5, name: "Mary" },
      ],
      Peter: [{ id: 4, name: "Peter" }],
    });
  });

  it("should return a list with the number of occurrences of each property", () => {
    const object = {
      "Quero ler": [
        {
          id: "kBQD",
          type: "select",
          property_name: "Status",
          property_value: "Quero ler",
        },
        {
          id: "kBQD",
          type: "select",
          property_name: "Status",
          property_value: "Quero ler",
        },
        {
          id: "kBQD",
          type: "select",
          property_name: "Status",
          property_value: "Quero ler",
        },
        {
          id: "kBQD",
          type: "select",
          property_name: "Status",
          property_value: "Quero ler",
        },
        {
          id: "kBQD",
          type: "select",
          property_name: "Status",
          property_value: "Quero ler",
        },
      ],
    };

    const result = AgroupHelper.countGroupedBy(object);

    expect(result).toEqual([{ "Quero ler": 5 }]);
  });

  it("should ungroup properties into a unique list", async () => {
    const inputList = [
      { id: 1, properties: ["prop1", "prop2"] },
      { id: 2, properties: ["prop3"] },
      { id: 3, properties: ["prop4", "prop5", "prop6"] },
    ];

    const expectedOutput = [
      "prop1",
      "prop2",
      "prop3",
      "prop4",
      "prop5",
      "prop6",
    ];

    const output = AgroupHelper.ungroupProperties(inputList);

    expect(output).toEqual(expectedOutput);
  });
});
