import axios from "src/API/axios";
import { RoomResponse } from "src/types/room";
import { formatDate } from "src/utils/search";
import {
  CreateRoomRequest,
  CreateRoomResponse,
  Hotel,
  UpdateRoomRequest,
} from "./types";

export const getHotelRooms = async (hotelId: number) => {
  const checkInDate = formatDate(new Date());
  const checkOutDate = formatDate(
    new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  );

  const response = await axios.get<RoomResponse[]>(
    `hotels/${hotelId}/rooms?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
  );
  return response.data;
};

export const getHotels = async () => {
  const response = await axios.get<Hotel[]>(`/hotels?pageSize=20&pageNumber=1`);
  return response.data;
};

export const deleteRoom = async (id: number) => {
  await axios.delete(`/rooms/${id}`);
  return id;
};

export const addRoom = async ({ hotelId, ...rest }: CreateRoomRequest) => {
  const response = await axios.post<CreateRoomResponse>(
    `/hotels/${hotelId}/rooms`,
    rest
  );
  return response.data;
};

export const updateRoom = async (id: number, data: UpdateRoomRequest) => {
  await axios.put(`/rooms/${id}`, data);
  return id;
};
