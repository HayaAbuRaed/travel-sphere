import axios from "src/API";
import { Hotel } from "./types";

export const getHotels = async (pageNumber: number, pageSize: number) => {
  const response = await axios.get<Hotel[]>(
    `/hotels?pageSize=${pageSize}&pageNumber=${pageNumber}`
  );
  return response.data;
};
