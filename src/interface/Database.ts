export interface DatabaseTitle {
  plain_text: string;
}

export interface DatabaseResult {
  id: string;
  title: Array<DatabaseTitle>;
  url: string;
  archived: boolean;
  properties?: Record<string, DatabasePropertyItem> | any;
}

export interface DatabaseResponse {
  id: string;
  title: string;
  url: string;
  archived: boolean;
  properties?: Record<string, DatabasePropertyItem>;
}

export interface DatabasePropertyItem {
  id: string;
  name: string;
  type: string;
  select?: Array<DatabaseOptionsItem>;
}

interface DatabaseOptionsItem {
  id: string;
  name: string;
  color: string;
}
