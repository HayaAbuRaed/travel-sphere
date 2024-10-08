import axios from "src/API/axios";
import { AddCityRequest, City, UpdateCityRequest } from "./types";

export const getCitiesData = async (pageNumber: number, pageSize: number) => {
  const response = await axios.get<City[]>(
    `/cities?pageSize=${pageSize}&pageNumber=${pageNumber}`
  );
  return response.data;
};

export const deleteCity = async (id: number) => {
  await axios.delete(`/cities/${id}`);
  return id;
};

export const addCity = async (request: AddCityRequest) => {
  const response = await axios.post<City>("/cities", request);
  return response.data;
};

export const updateCity = async (city: UpdateCityRequest) => {
  const { id, ...rest } = city;
  await axios.put(`/cities/${id}`, rest);
  return city;
};
