import { DatabaseResult } from "../../src/interface/Database";

export function mockListUngrouped() {
  return [
    {
      id: "%3Dj87",
      type: "select",
      select: {
        id: "5ed9893a-a0d9-40b8-9901-dc3391d67f68",
        name: "state",
        color: "blue",
      },
      property_name: "state",
      property_value: "saopaulo",
    },
    {
      id: "%3Dj87",
      type: "select",
      select: {
        id: "5ed9893a-a0d9-40b8-9901-dc3391d67f68",
        name: "state",
        color: "blue",
      },
      property_name: "state",
      property_value: "saopaulo",
    },
    {
      id: "%3Dj87",
      type: "select",
      select: {
        id: "5ed9893a-a0d9-40b8-9901-dc3391d67f68",
        name: "state",
        color: "blue",
      },
      property_name: "state",
      property_value: "saopaulo",
    },
    {
      id: "%3Dj87",
      type: "select",
      select: {
        id: "5ed9893a-a0d9-40b8-9901-dc3391d67f68",
        name: "state",
        color: "blue",
      },
      property_name: "state",
      property_value: "riodejaneiro",
    },
  ];
}

export function mockResultToMap(): Array<DatabaseResult> {
  return [
    {
      id: "f9eb6abc-b641-4ad1-9ea5-6dd58bdc2101",
      title: [{ plain_text: "teste-1" }],
      archived: false,
      url: "https://www.notion.so/teste-1",
    },
    {
      id: "f9eb6abc-b641-4ad1-9ea5-6dd58bdc2101",
      title: [{ plain_text: "teste-2" }],
      archived: false,
      url: "https://www.notion.so/teste-12",
    },
  ];
}

export function mockDatabaseResult(): DatabaseResult {
  return {
    id: "efe68634-dbd3-4e45-bb0a-5394215fccb9",
    title: [{ plain_text: "Leituras" }],
    url: "https://www.notion.so/efe68634dbd34e45bb0a5394215fccb9",
    archived: false,
    properties: [
      {
        id: "%3Dj87",
        name: "Autor",
        type: "select",
        select: {
          options: [
            {
              id: "cf2f334b-7237-4755-9ec6-cce1667f0617",
              name: "Agatha Christie",
              color: "blue",
            },
            {
              id: "dcb8d585-d962-4861-a05c-967a345a018a",
              name: "Robert C. Martin",
              color: "blue",
            },
            {
              id: "3fc7c7cf-bbdd-44b5-8670-c2242cb93cad",
              name: "Leandro Karnal",
              color: "blue",
            },
            {
              id: "f1c562cb-0653-4aac-813f-f5d7d8247741",
              name: "Nathalia Arcuri",
              color: "blue",
            },
            {
              id: "b7888e26-3bbf-4dca-bdd2-43fa2ecb8313",
              name: "Thiago Nigro",
              color: "blue",
            },
            {
              id: "8edacf7a-e209-4b67-8efa-73a7bff322ac",
              name: "David Allen",
              color: "blue",
            },
            {
              id: "30cb0b6b-a64d-49fd-ae43-e1b8637ad7f1",
              name: "Luiz Henrique Mandetta",
              color: "blue",
            },
            {
              id: "21d0cbba-5ae7-4bb9-9cd2-e9f4362d1ee7",
              name: "Tabata Amaral",
              color: "blue",
            },
            {
              id: "c473d554-5b1f-42c8-aef6-de638de282f7",
              name: "Marco Tulio Valente",
              color: "blue",
            },
            {
              id: "6788650e-823d-42b2-b766-418e7b368d9d",
              name: "Brendon Burchart",
              color: "blue",
            },
            {
              id: "1a2a37b0-b88f-4845-bcd2-251b4d0ce615",
              name: "Gustavo Cerbasi",
              color: "blue",
            },
            {
              id: "f40c472c-0d07-4b3c-a176-600a88fc238d",
              name: "T. Hark Eker",
              color: "blue",
            },
            {
              id: "21c442b9-0add-4b33-bce5-8c0a12419aaa",
              name: "Arthun Conan Doyle",
              color: "blue",
            },
            {
              id: "af0b2a11-da8c-4ec7-a917-c6eac32cf231",
              name: "Greg Mckeown",
              color: "blue",
            },
            {
              id: "6be0481b-d420-4aa5-939b-e30e624eb78e",
              name: "Daniel Martins de Barros",
              color: "blue",
            },
            {
              id: "b8fd6290-6ecf-4c58-b52f-971098d9fd44",
              name: "Carol Dweck",
              color: "blue",
            },
            {
              id: "fe9a0bd0-734d-4481-8cbf-5f6ef0011603",
              name: "Howard Marks",
              color: "blue",
            },
            {
              id: "2ae5e571-7b2c-4d16-89a5-7a7ade6111ec",
              name: "Sarah Silverton",
              color: "blue",
            },
            {
              id: "11ec08c4-6b45-4d55-8c15-9c4fc7353016",
              name: "Mario Sergio Cortella",
              color: "blue",
            },
            {
              id: "c7dd1944-a817-4f6d-ad42-7ae44f460856",
              name: "Zeno Rocha",
              color: "blue",
            },
            {
              id: "69b31023-dfe2-4c3e-a541-57a8cb7277d0",
              name: "Gil do Vigor",
              color: "blue",
            },
            {
              id: "bc0e6070-1ddd-4705-8d5e-16268c8a57a1",
              name: "George Clason",
              color: "blue",
            },
            {
              id: "612762bb-ab33-4878-aa46-ab055266dce0",
              name: "Maytê Carvalho",
              color: "blue",
            },
            {
              id: "59bee834-eced-4dc5-8a55-5b2eb5d61e89",
              name: "Débora Brum",
              color: "blue",
            },
            {
              id: "9398a498-4dc9-459f-b261-a046ad25e668",
              name: "Ichiro Kishimi",
              color: "blue",
            },
            {
              id: "18a5d69e-4826-4725-9cfc-34458a1b3078",
              name: "Amy Cuddy",
              color: "blue",
            },
            {
              id: "303b615b-9f8b-41ec-88e4-a08728d1c7bb",
              name: "Arthur Schopenhauer",
              color: "blue",
            },
            {
              id: "d402535d-fa11-4fd5-a1bb-0775da3d849b",
              name: "Pierre Weil",
              color: "blue",
            },
            {
              id: "8da42554-0fee-4b28-9344-d245643300f8",
              name: "Cora Ottoni",
              color: "blue",
            },
            {
              id: "ee8bc6f1-2e13-468b-9bfb-ade6fba7c2ee",
              name: "Nadia Shammas",
              color: "blue",
            },
            {
              id: "70d44d0a-72e6-45eb-911b-c4e422e147b5",
              name: "Brian Michael Bendis",
              color: "blue",
            },
            {
              id: "7cb63867-4f8d-479c-9cc0-32ec0e9317c8",
              name: "Gabriel Bá",
              color: "blue",
            },
            {
              id: "20af5e10-a03f-4552-9b91-02e707056a9a",
              name: "Daniel Goleman",
              color: "blue",
            },
            {
              id: "8afcdae3-1c94-40b4-be08-68c123707237",
              name: "Dale Carnegie",
              color: "blue",
            },
            {
              id: "88e18495-032e-4da5-ab48-085c99b0d150",
              name: "Nigel Cumberland",
              color: "blue",
            },
            {
              id: "daba1eb0-c493-4d70-a3fe-dfb74e835fa1",
              name: "Matt Haig",
              color: "blue",
            },
            {
              id: "f6d3f9d0-7068-4860-8f9f-add7aa3307c7",
              name: "Reinaldo Polito",
              color: "blue",
            },
            {
              id: "59ce470e-a000-4dcc-96e9-dc911b7495a9",
              name: "Martha Robles",
              color: "blue",
            },
            {
              id: "62b608af-173a-4d37-a9fc-df6eedd894e8",
              name: "Shel Silverten",
              color: "blue",
            },
            {
              id: "3880fa1f-a6d2-49f9-89cc-23673c906ae1",
              name: "C.S Lewis",
              color: "blue",
            },
            {
              id: "5ed9893a-a0d9-40b8-9901-dc3391d67f68",
              name: "João Doria",
              color: "blue",
            },
          ],
        },
        property_name: "Autor",
        property_value: undefined,
      },
      {
        id: "%5Cf!r",
        name: "Gênero",
        type: "select",
        select: {
          options: [
            {
              id: "a5757d82-bbe1-42b5-bc4e-2a147984b2e2",
              name: "Suspense",
              color: "yellow",
            },
            {
              id: "e58cfbde-6e3b-4687-8b7b-00fe2182e6d7",
              name: "Tecnologia",
              color: "purple",
            },
            {
              id: "c6cb57af-ce29-45fe-873f-78b7a7f7d5dd",
              name: "Filosofia",
              color: "pink",
            },
            {
              id: "a9016b8c-242f-4b9b-ab25-705d68d58a78",
              name: "Financeiro",
              color: "green",
            },
            {
              id: "598adda3-4956-4e1e-95b8-c61a906a245e",
              name: "Produtividade",
              color: "red",
            },
            {
              id: "79bd6edb-83e9-4f85-b142-0da04f831caa",
              name: "Biografia",
              color: "brown",
            },
            {
              id: "c047c0d3-96f1-4140-abbb-c3c546c3f208",
              name: "Psicologia",
              color: "orange",
            },
            {
              id: "7c20a112-72ab-47b9-a8ee-3d270e6750bd",
              name: "2020",
              color: "blue",
            },
            {
              id: "caabf488-47d4-41d5-8341-034e646c38b9",
              name: "Comunicação",
              color: "pink",
            },
            {
              id: "45c2ba56-1d02-4acb-a4dc-bbd4d4839015",
              name: "Quadrinhos",
              color: "brown",
            },
            {
              id: "d04446a8-008c-4d1d-bd47-1d8270c18522",
              name: "Ficção",
              color: "yellow",
            },
            {
              id: "f2266b1d-03cc-4c31-a7ee-693b7daf2857",
              name: "Mitologia",
              color: "gray",
            },
            {
              id: "fa3cc748-b2fd-42a5-866c-16422afc72e2",
              name: "Infantil",
              color: "default",
            },
          ],
        },
        property_name: "Gênero",
        property_value: undefined,
      },
      {
        id: "kBQD",
        name: "Status",
        type: "select",
        select: {
          options: [
            {
              id: "3e6cc50e-dd32-4758-bbce-22b51baf5f5b",
              name: "Lido",
              color: "green",
            },
            {
              id: "b00662db-c93a-483f-af28-65aec1c4dbe6",
              name: "Lendo",
              color: "orange",
            },
            {
              id: "73516bf5-5148-4173-9c1b-7a67c6b921ea",
              name: "Quero ler",
              color: "pink",
            },
          ],
        },
        property_name: "Status",
        property_value: undefined,
      },
    ],
  };
}

export function mockApiPostResponse() {
  return {
    status: 200,
    statusText: "OK",
    data: {
      object: "list",
      results: [
        {
          object: "page",
          id: "09ebd4de-bc1e-41ba-be39-8b2e95dae713",
          created_time: "2022-05-22T15:51:00.000Z",
          last_edited_time: "2022-05-22T15:51:00.000Z",
          created_by: {
            object: "user",
            id: "8e2c845f-cd10-4c01-a813-115003aa0f6b",
          },
          last_edited_by: {
            object: "user",
            id: "8e2c845f-cd10-4c01-a813-115003aa0f6b",
          },
          cover: null,
          icon: null,
          parent: {
            type: "database_id",
            database_id: "efe68634-dbd3-4e45-bb0a-5394215fccb9",
          },
          archived: false,
          properties: {
            Progresso: {
              id: "%3B%40nh",
              type: "formula",
              formula: {
                type: "string",
                string: "▓▓▓▓▓▓▓▓▓▓ 100%",
              },
            },
            Autor: {
              id: "%3Dj87",
              type: "select",
              select: {
                id: "11ec08c4-6b45-4d55-8c15-9c4fc7353016",
                name: "Mario Sergio Cortella",
                color: "blue",
              },
            },
            "Progresso %": {
              id: "AaL%3E",
              type: "formula",
              formula: {
                type: "number",
                number: 1,
              },
            },
            "Página Atual": {
              id: "Vn%7DD",
              type: "number",
              number: 176,
            },
            Gênero: {
              id: "%5Cf!r",
              type: "select",
              select: {
                id: "c6cb57af-ce29-45fe-873f-78b7a7f7d5dd",
                name: "Filosofia",
                color: "pink",
              },
            },
            Status: {
              id: "kBQD",
              type: "select",
              select: {
                id: "3e6cc50e-dd32-4758-bbce-22b51baf5f5b",
                name: "Lido",
                color: "green",
              },
            },
            Capa: {
              id: "l%5Bj%7B",
              type: "files",
              files: [
                {
                  name: "51xH0mWSeGL._SX331_BO1,204,203,200_.jpg",
                  type: "file",
                  file: {
                    url: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e1872338-e845-407a-8b8b-72877a760f56/51xH0mWSeGL._SX331_BO1204203200_.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230501T172025Z&X-Amz-Expires=3600&X-Amz-Signature=e4ce67acfa30e2b0356ef38b81812e92ff933d321ecb0286f5791a1523dfc815&X-Amz-SignedHeaders=host&x-id=GetObject",
                    expiry_time: "2023-05-01T18:20:25.457Z",
                  },
                },
              ],
            },
            Páginas: {
              id: "nJ9O",
              type: "number",
              number: 176,
            },
            "Atualizado em": {
              id: "%7CG%5C%5D",
              type: "last_edited_time",
              last_edited_time: "2022-05-22T15:51:00.000Z",
            },
            Título: {
              id: "title",
              type: "title",
              title: [
                {
                  type: "text",
                  text: {
                    content: "Por que fazemos o que fazemos",
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
                  plain_text: "Por que fazemos o que fazemos",
                  href: null,
                },
              ],
            },
          },
          url: "https://www.notion.so/Por-que-fazemos-o-que-fazemos-09ebd4debc1e41babe398b2e95dae713",
        },
        {
          object: "page",
          id: "600d03cd-c21a-40a2-b8fc-652973046ac6",
          created_time: "2022-05-22T15:51:00.000Z",
          last_edited_time: "2022-05-30T11:39:00.000Z",
          created_by: {
            object: "user",
            id: "8e2c845f-cd10-4c01-a813-115003aa0f6b",
          },
          last_edited_by: {
            object: "user",
            id: "8e2c845f-cd10-4c01-a813-115003aa0f6b",
          },
          cover: null,
          icon: null,
          parent: {
            type: "database_id",
            database_id: "efe68634-dbd3-4e45-bb0a-5394215fccb9",
          },
          archived: false,
          properties: {
            Progresso: {
              id: "%3B%40nh",
              type: "formula",
              formula: {
                type: "string",
                string: "▓▓▓▓▓▓▓▓▓▓ 100%",
              },
            },
            Autor: {
              id: "%3Dj87",
              type: "select",
              select: {
                id: "11ec08c4-6b45-4d55-8c15-9c4fc7353016",
                name: "Mario Sergio Cortella",
                color: "blue",
              },
            },
            "Progresso %": {
              id: "AaL%3E",
              type: "formula",
              formula: {
                type: "number",
                number: 1,
              },
            },
            "Página Atual": {
              id: "Vn%7DD",
              type: "number",
              number: 175,
            },
            Gênero: {
              id: "%5Cf!r",
              type: "select",
              select: {
                id: "c6cb57af-ce29-45fe-873f-78b7a7f7d5dd",
                name: "Filosofia",
                color: "pink",
              },
            },
            Status: {
              id: "kBQD",
              type: "select",
              select: {
                id: "3e6cc50e-dd32-4758-bbce-22b51baf5f5b",
                name: "Lido",
                color: "green",
              },
            },
            Capa: {
              id: "l%5Bj%7B",
              type: "files",
              files: [
                {
                  name: "81I3JIV40cL.jpg",
                  type: "file",
                  file: {
                    url: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/20fde81e-16f9-4bab-b192-904a79059e36/81I3JIV40cL.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230501T172025Z&X-Amz-Expires=3600&X-Amz-Signature=e545b059a1b1ddd89103a6cbcadfab2bf4cbb32d40d736b0718b37bd4342f956&X-Amz-SignedHeaders=host&x-id=GetObject",
                    expiry_time: "2023-05-01T18:20:25.456Z",
                  },
                },
              ],
            },
            Páginas: {
              id: "nJ9O",
              type: "number",
              number: 175,
            },
            "Atualizado em": {
              id: "%7CG%5C%5D",
              type: "last_edited_time",
              last_edited_time: "2022-05-30T11:39:00.000Z",
            },
            Título: {
              id: "title",
              type: "title",
              title: [
                {
                  type: "text",
                  text: {
                    content: "Viver em paz para morrer em paz",
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
                  plain_text: "Viver em paz para morrer em paz",
                  href: null,
                },
              ],
            },
          },
          url: "https://www.notion.so/Viver-em-paz-para-morrer-em-paz-600d03cdc21a40a2b8fc652973046ac6",
        },
        {
          object: "page",
          id: "031cc1b6-c14a-4d91-8335-5cbef86c30b9",
          created_time: "2022-05-22T15:46:00.000Z",
          last_edited_time: "2022-05-22T20:50:00.000Z",
          created_by: {
            object: "user",
            id: "8e2c845f-cd10-4c01-a813-115003aa0f6b",
          },
          last_edited_by: {
            object: "user",
            id: "8e2c845f-cd10-4c01-a813-115003aa0f6b",
          },
          cover: null,
          icon: null,
          parent: {
            type: "database_id",
            database_id: "efe68634-dbd3-4e45-bb0a-5394215fccb9",
          },
          archived: false,
          properties: {
            Progresso: {
              id: "%3B%40nh",
              type: "formula",
              formula: {
                type: "string",
                string: "▓▓▓▓▓▓▓▓▓▓ 100%",
              },
            },
            Autor: {
              id: "%3Dj87",
              type: "select",
              select: {
                id: "11ec08c4-6b45-4d55-8c15-9c4fc7353016",
                name: "Mario Sergio Cortella",
                color: "blue",
              },
            },
            "Progresso %": {
              id: "AaL%3E",
              type: "formula",
              formula: {
                type: "number",
                number: 1,
              },
            },
            "Página Atual": {
              id: "Vn%7DD",
              type: "number",
              number: 189,
            },
            Gênero: {
              id: "%5Cf!r",
              type: "select",
              select: {
                id: "c6cb57af-ce29-45fe-873f-78b7a7f7d5dd",
                name: "Filosofia",
                color: "pink",
              },
            },
            Status: {
              id: "kBQD",
              type: "select",
              select: {
                id: "3e6cc50e-dd32-4758-bbce-22b51baf5f5b",
                name: "Lido",
                color: "green",
              },
            },
            Capa: {
              id: "l%5Bj%7B",
              type: "files",
              files: [
                {
                  name: "81Y2ma7-0fL.jpg",
                  type: "file",
                  file: {
                    url: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/638ef474-5b6a-4bcd-97a5-2bcc05d9b8fc/81Y2ma7-0fL.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230501T172025Z&X-Amz-Expires=3600&X-Amz-Signature=d2cbe19ecddd79ff80af74354107b3636b8f12bdae276613bd2297c245807bc6&X-Amz-SignedHeaders=host&x-id=GetObject",
                    expiry_time: "2023-05-01T18:20:25.458Z",
                  },
                },
              ],
            },
            Páginas: {
              id: "nJ9O",
              type: "number",
              number: 189,
            },
            "Atualizado em": {
              id: "%7CG%5C%5D",
              type: "last_edited_time",
              last_edited_time: "2022-05-22T20:50:00.000Z",
            },
            Título: {
              id: "title",
              type: "title",
              title: [
                {
                  type: "text",
                  text: {
                    content: "A sorte segue a coragem!",
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
                  plain_text: "A sorte segue a coragem!",
                  href: null,
                },
              ],
            },
          },
          url: "https://www.notion.so/A-sorte-segue-a-coragem-031cc1b6c14a4d9183355cbef86c30b9",
        },
        {
          object: "page",
          id: "4da2403c-fa2f-4ce7-a2d5-a2b7ed4a54f8",
          created_time: "2021-08-24T23:50:00.000Z",
          last_edited_time: "2022-02-28T01:40:00.000Z",
          created_by: {
            object: "user",
            id: "8e2c845f-cd10-4c01-a813-115003aa0f6b",
          },
          last_edited_by: {
            object: "user",
            id: "8e2c845f-cd10-4c01-a813-115003aa0f6b",
          },
          cover: null,
          icon: null,
          parent: {
            type: "database_id",
            database_id: "efe68634-dbd3-4e45-bb0a-5394215fccb9",
          },
          archived: false,
          properties: {
            Progresso: {
              id: "%3B%40nh",
              type: "formula",
              formula: {
                type: "string",
                string: "▓▓▓▓▓▓▓▓▓▓ 100%",
              },
            },
            Autor: {
              id: "%3Dj87",
              type: "select",
              select: {
                id: "bc0e6070-1ddd-4705-8d5e-16268c8a57a1",
                name: "George Clason",
                color: "blue",
              },
            },
            "Progresso %": {
              id: "AaL%3E",
              type: "formula",
              formula: {
                type: "number",
                number: 1,
              },
            },
            "Página Atual": {
              id: "Vn%7DD",
              type: "number",
              number: 160,
            },
            Gênero: {
              id: "%5Cf!r",
              type: "select",
              select: {
                id: "a9016b8c-242f-4b9b-ab25-705d68d58a78",
                name: "Financeiro",
                color: "green",
              },
            },
            Status: {
              id: "kBQD",
              type: "select",
              select: {
                id: "3e6cc50e-dd32-4758-bbce-22b51baf5f5b",
                name: "Lido",
                color: "green",
              },
            },
            Capa: {
              id: "l%5Bj%7B",
              type: "files",
              files: [
                {
                  name: "51cB4wSNxQL._SX333_BO1,204,203,200_.jpg",
                  type: "file",
                  file: {
                    url: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/466d63a0-a63d-4225-896c-44a1dd921803/51cB4wSNxQL._SX333_BO1204203200_.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230501T172025Z&X-Amz-Expires=3600&X-Amz-Signature=723071bb0b7da7cbd6b27591461000afdcd8fcbe1eb804697cf597a622134cb9&X-Amz-SignedHeaders=host&x-id=GetObject",
                    expiry_time: "2023-05-01T18:20:25.455Z",
                  },
                },
              ],
            },
            Páginas: {
              id: "nJ9O",
              type: "number",
              number: 160,
            },
            "Atualizado em": {
              id: "%7CG%5C%5D",
              type: "last_edited_time",
              last_edited_time: "2022-02-28T01:40:00.000Z",
            },
            Título: {
              id: "title",
              type: "title",
              title: [
                {
                  type: "text",
                  text: {
                    content: "O homem mais rico da Babilônia",
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
                  plain_text: "O homem mais rico da Babilônia",
                  href: null,
                },
              ],
            },
          },
          url: "https://www.notion.so/O-homem-mais-rico-da-Babil-nia-4da2403cfa2f4ce7a2d5a2b7ed4a54f8",
        },
      ],
    },
  };
}
