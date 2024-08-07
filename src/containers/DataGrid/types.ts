export interface DataGridProps<T> {
  data: T[];
  headers: (keyof T)[];
  loadMore: () => void;
  hasMore: boolean;
}

export interface SortConfigState<T> {
  key: keyof T;
  direction: "asc" | "desc";
}
