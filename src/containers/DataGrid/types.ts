export interface DataGridProps<T> {
  data: T[];
  headers: (keyof T)[];
  loadMore: () => void;
  hasMore: boolean;
  onDeletion: (item: T) => void;
  onRowClick?: (item: T) => void;
}

export interface SortConfigState<T> {
  key: keyof T;
  direction: "asc" | "desc";
}
