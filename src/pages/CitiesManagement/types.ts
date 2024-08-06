import { City } from "./API/types";

export type FilterKey = keyof City | "all";

export interface FilterConfigState {
  key: FilterKey;
  value: string;
}

export interface CitiesDataGridProps {
  cities: City[];
}
