import { createSlice } from "@reduxjs/toolkit";
import { ACCESS_TOKEN_KEY } from "src/constants/localStorage";
import { UserState } from "./types";
import { loginHelper } from "./utils";

const initialState: UserState = {
  userId: "",
  givenName: "",
  familyName: "",
  userType: "",
  expirationDate: 0,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: loginHelper,

    logout: (state) => {
      state = initialState;
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      return state;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
