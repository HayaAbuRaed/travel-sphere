import axios from "src/API/axios";
import { City } from "./types";

export const getCitiesData = async () => {
  const response = await axios.get<City[]>("/cities");
  return response.data;
};
