export function mockSearchResponse() {
  return {
    data: {
      results: [
        {
          id: 1,
          title: [{ plain_text: "Item 1" }],
          url: "http://example.com/item/1",
          archived: false,
        },
        {
          id: 2,
          title: [{ plain_text: "Item 2" }],
          url: "http://example.com/item/2",
          archived: true,
        },
      ],
    },
  };
}
