export function mockSearchResponse() {
  return {
    status: 200,
    data: {
      object: "database",
      id: "1234",
      cover: null,
      icon: {
        type: "emoji",
        emoji: "📺",
      },
      created_time: "2020-12-17T23:14:00.000Z",
      created_by: {
        object: "user",
        id: "8e2c845f-cd10-4c01-a813-115003aa0f6b",
      },
      last_edited_by: {
        object: "user",
        id: "8e2c845f-cd10-4c01-a813-115003aa0f6b",
      },
      last_edited_time: "2023-04-20T01:09:00.000Z",
      title: [
        {
          type: "text",
          text: {
            content: "Séries e filmes",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Séries e filmes",
          href: null,
        },
      ],
      description: [],
      is_inline: false,
      properties: {
        Status: {
          id: "%3CcTh",
          name: "Status",
          type: "select",
          select: {
            options: [
              {
                id: "a0ac23ed-5c25-4286-8876-3b921d16700a",
                name: "Quero assistir",
                color: "blue",
              },
              {
                id: "6662ffdf-692f-496e-a0ec-89508ae07f29",
                name: "Assistindo",
                color: "orange",
              },
              {
                id: "6a5ce76f-cfae-4db4-982f-be0a856f0726",
                name: "Assistido",
                color: "green",
              },
            ],
          },
        },
        "Estreia em": {
          id: "SAau",
          name: "Estreia em",
          type: "date",
          date: {},
        },
        "Last edited time": {
          id: "Vl%5ES",
          name: "Last edited time",
          type: "last_edited_time",
          last_edited_time: {},
        },
        Plataforma: {
          id: "~jwM",
          name: "Plataforma",
          type: "select",
          select: {
            options: [
              {
                id: "0134affe-5b70-41e3-84d3-03ac45931262",
                name: "Netflix",
                color: "red",
              },
              {
                id: "c5753904-afbb-4b04-b492-830bf928e10d",
                name: "Torrent",
                color: "green",
              },
              {
                id: "3677c956-1295-41d3-beba-b094f1d07c9e",
                name: "Disney +",
                color: "blue",
              },
              {
                id: "5753e881-f802-4e38-aef9-0dece8cdfab2",
                name: "Youtube",
                color: "brown",
              },
              {
                id: "7381102d-c87c-4739-8b1c-f3b44ab9336d",
                name: "Globoplay",
                color: "yellow",
              },
              {
                id: "176d411e-d244-46fa-ae1f-1cbdf733ecf2",
                name: "HBO",
                color: "orange",
              },
              {
                id: "e77b3572-8731-4a03-84ca-5d6572fa27da",
                name: "Cinema",
                color: "purple",
              },
              {
                id: "2e7f9796-db2a-485a-9fdb-5b4024fdc0d4",
                name: "Amazon",
                color: "pink",
              },
            ],
          },
        },
        Título: {
          id: "title",
          name: "Título",
          type: "title",
          title: {},
        },
      },
      parent: {
        type: "page_id",
        page_id: "115bad29-ce3d-4981-b759-bd3b3559f041",
      },
      url: "https://www.notion.so/0c72c7957b934de78e34758490319795",
      archived: false,
    },
  };
}
