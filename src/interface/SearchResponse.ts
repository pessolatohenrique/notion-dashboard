export interface SearchResponse {
  results: Array<SearchResult>;
}

export interface SearchResult {
  id: string;
  title: string;
  url: string;
  archived: boolean;
}

export interface SearchTitle {
  plain_text: string;
}

export interface ItemResult {
  id: string;
  title: Array<SearchTitle>;
  url: string;
  archived: boolean;
}
