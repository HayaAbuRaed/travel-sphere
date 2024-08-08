import { CreateHotelRequest } from "./API/types";

export const HOTELS_QUERY_KEY = "hotels";

export enum DialogType {
  DELETE = "delete",
  ADD = "add",
  EDIT = "edit",
}

export const initialValues: CreateHotelRequest = {
  name: "",
  description: "",
  hotelType: 1,
  starRating: 1,
  latitude: 31.9,
  longitude: 35.2,
};
