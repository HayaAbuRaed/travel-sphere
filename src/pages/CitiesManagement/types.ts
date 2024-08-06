import { City } from "./API/types";

export interface SortConfigState {
  key: keyof City;
  direction: "asc" | "desc";
}

export type FilterKey = keyof City | "all";

export interface FilterConfigState {
  key: FilterKey;
  value: string;
}

export interface CitiesDataGridProps {
  cities: City[];
  sortConfig: SortConfigState | null;
  handleSort: (header: keyof City) => void;
}
