export interface DataGridProps<T> {
  data: T[];
  headers: (keyof T)[];
}

export interface SortConfigState<T> {
  key: keyof T;
  direction: "asc" | "desc";
}
