import { CreateRoomRequest } from "./API/types";

export const ROOMS_QUERY_KEY = "hotelRooms";

export const HOTELS_QUERY_KEY = "hotels";

export enum DialogType {
  ADD = "ADD",
  DELETE = "DELETE",
  EDIT = "EDIT",
}

export const initialValues: CreateRoomRequest = {
  hotelId: 0,
  roomNumber: "",
  cost: 0,
};
