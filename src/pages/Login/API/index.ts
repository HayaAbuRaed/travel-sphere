import axios from "src/API/axios";
import { LoginRequest, LoginResponse } from "./types";

export const loginApi = async (payload: LoginRequest) => {
  const response = await axios.post<LoginResponse>(
    "/auth/authenticate",
    payload
  );

  return response.data;
};
