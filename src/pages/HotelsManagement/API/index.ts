import axios from "src/API";
import { CreateHotelRequest, Hotel, UpdateHotelRequest } from "./types";

export const getHotels = async (pageNumber: number, pageSize: number) => {
  const response = await axios.get<Hotel[]>(
    `/hotels?pageSize=${pageSize}&pageNumber=${pageNumber}`
  );
  return response.data;
};

export const deleteHotel = async (hotelId: number) => {
  const response = await axios.delete(`/cities/1/hotels/${hotelId}`);
  return response.data;
};

export const addHotel = async (hotel: CreateHotelRequest) => {
  const response = await axios.post("/cities/1/hotels", hotel);
  return response.data;
};

export const updateHotel = async ({ hotelId, ...rest }: UpdateHotelRequest) => {
  await axios.put(`/hotels/${hotelId}`, rest);
  return hotelId;
};
