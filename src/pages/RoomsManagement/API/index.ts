import axios from "src/API/axios";
import { RoomResponse } from "src/types/room";
import { formatDate } from "src/utils/search";
import { Hotel } from "./types";

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