import { City } from "./API/types";

export type FilterKey = keyof City | "all";

export interface FilterConfigState {
  key: FilterKey;
  value: string;
}

export interface CitiesDataGridProps {
  cities: City[];
}

export interface AddCityDialogProps {
  open: boolean;
  onClose: () => void;
}

export interface UpdateCityDialogProps extends AddCityDialogProps {
  city: City;
}
