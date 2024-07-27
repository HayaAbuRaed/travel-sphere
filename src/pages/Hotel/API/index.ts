import axios from "API/axios";
import { HotelResponse, PhotoResponse, ReviewResponse } from "./types";

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
