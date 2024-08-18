import userEvent from "@testing-library/user-event";
import { LoginRequest } from "../API/types";
import { getters } from "./constants";

export const fillForm = async ({ userName, password }: LoginRequest) => {
  const usernameInput = getters.getUsernameInput();
  const passwordInput = getters.getPasswordInput();

  await userEvent.type(usernameInput, userName);
  await userEvent.type(passwordInput, password);
};

export const logUserIn = async (loginRequest: LoginRequest) => {
  const loginButton = getters.getSubmitButton();
  await fillForm(loginRequest);
  userEvent.click(loginButton);
};
