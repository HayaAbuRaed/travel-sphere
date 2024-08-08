import { AddCityRequest } from "./API/types";

export const CITIES_QUERY_KEY = "cities";

export enum DialogType {
  ADD = "ADD",
  EDIT = "EDIT",
  DELETE = "DELETE",
}

export const initialValues: AddCityRequest = {
  name: "",
  description: "",
};
