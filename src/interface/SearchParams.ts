export interface SearchParams {
  filter: Filter;
}

interface Filter {
  property: string;
  value: string;
}
