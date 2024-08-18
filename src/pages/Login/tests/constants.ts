import { screen } from "@testing-library/react";

export const getters = {
  getLogo: () => screen.getByRole("img", { name: /logo/i }),
  getUsernameInput: () => screen.getByRole("textbox", { name: /username/i }),
  getPasswordInput: () =>
    screen.getByPlaceholderText(/e.g., password/i, { exact: false }),
  getVisibilityButton: () =>
    screen.getByRole("button", { name: /toggle password visibility/i }),
  getSubmitButton: () => screen.getByRole("button", { name: /log in/i }),
  getParadiseText: () => screen.getByText(/a piece of paradise just for you/i),
  getCopyRightText: () =>
    screen.getByText(/© 2024 travelSphere/i, { exact: false }),
};
