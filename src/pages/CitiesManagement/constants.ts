import { AddCityRequest } from "./API/types";

export const CITIES_QUERY_KEY = "cities";

export enum DialogType {
  ADD = "ADD",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}

export const initialValues: AddCityRequest = {
  name: "",
  description: "",
};
