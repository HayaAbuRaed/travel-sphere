import axios from "API/axios";
import {
  GetRoomsRequest,
  HotelResponse,
  PhotoResponse,
  ReviewResponse,
} from "./types";
import { RoomResponse } from "src/types/room";

export const getHotel = async (id: number) => {
  const response = await axios.get<HotelResponse>(`/hotels/${id}`);
  return response.data;
};

export const getHotelGallery = async (id: number) => {
  const response = await axios.get<PhotoResponse[]>(`/hotels/${id}/gallery`);
  return response.data;
};

export const getHotelReviews = async (id: number) => {
  const response = await axios.get<ReviewResponse[]>(`/hotels/${id}/reviews`);
  return response.data;
};

export const getHotelRooms = async ({
  hotelId,
  checkInDate,
  checkOutDate,
}: GetRoomsRequest) => {
  const response = await axios.get<RoomResponse[]>(
    `hotels/${hotelId}/rooms?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
  );
  return response.data;
};
