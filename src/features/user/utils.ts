import { PayloadAction } from "@reduxjs/toolkit";
import { LoginPayload, UserState } from "./types";

export const loginHelper = (
  state: UserState,
  action: PayloadAction<LoginPayload>
) => {
  const { userId, givenName, familyName, userType, expirationDate } =
    action.payload;

  state.userId = userId;
  state.givenName = givenName;
  state.familyName = familyName;
  state.userType = userType;
  state.expirationDate = expirationDate;

  state.isAuthenticated = true;
};
