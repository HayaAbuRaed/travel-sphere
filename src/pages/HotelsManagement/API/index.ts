import axios from "src/API";
import { Hotel } from "./types";

export const getHotels = async () => {
  const response = await axios.get<Hotel[]>(`/hotels?pageSize=10&pageNumber=1`);
  return response.data;
};
