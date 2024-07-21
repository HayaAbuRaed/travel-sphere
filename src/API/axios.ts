import axios, { AxiosRequestConfig } from "axios";
import { ACCESS_TOKEN_KEY } from "src/constants/localStorage";

const defaultAxiosSettings: AxiosRequestConfig = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN_KEY),
  },
};

const travelSphereAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  ...defaultAxiosSettings,
});

export default travelSphereAxios;
