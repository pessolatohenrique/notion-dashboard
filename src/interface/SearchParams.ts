export interface SearchParams {
  filter: Filter;
}

interface Filter {
  property: string;
  value?: string;
  select?: FilterSelect;
}

export interface FilterSelect {
  is_not_empty?: boolean;
}
