import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import render from "src/tests/render";
import Login from "../Login";
import { getters } from "./constants";

describe("pages/Login", () => {
  describe("Smoke tests", () => {
    beforeEach(() => render(<Login />));

    it("should render the login interface correctly", () => {
      const logo = getters.getLogo();
      const usernameInput = getters.getUsernameInput();
      const passwordInput = getters.getPasswordInput();
      const visibilityButton = getters.getVisibilityButton();
      const submitButton = getters.getSubmitButton();
      const paradiseText = getters.getParadiseText();
      const copyRightText = getters.getCopyRightText();

      expect(logo).toBeInTheDocument();
      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(visibilityButton).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
      expect(paradiseText).toBeInTheDocument();
      expect(copyRightText).toBeInTheDocument();
    });
  });

  describe("Validation", () => {
    beforeEach(() => render(<Login />));

    it("should have the login button disabled by default", () => {
      const submitButton = getters.getSubmitButton();
      expect(submitButton).toBeDisabled();
    });

    it("should have the password field hidden by default", () => {
      const passwordInput = getters.getPasswordInput();
      expect(passwordInput).toHaveAttribute("type", "password");
    });

    it("should have the username field focused by default", () => {
      const usernameInput = getters.getUsernameInput();
      expect(usernameInput).toHaveFocus();
    });

    it("should toggle the login button state based on form validity", async () => {
      const usernameInput = getters.getUsernameInput();
      const passwordInput = getters.getPasswordInput();
      const submitButton = getters.getSubmitButton();

      await userEvent.type(usernameInput, "user");
      await userEvent.type(passwordInput, "password");
      expect(submitButton).toBeEnabled();

      await userEvent.clear(usernameInput);
      await userEvent.type(usernameInput, "us");
      expect(submitButton).toBeDisabled();
    });

    it("should toggle password visibility when the visibility button is clicked", async () => {
      const passwordInput = getters.getPasswordInput();
      const visibilityButton = getters.getVisibilityButton();

      await userEvent.click(visibilityButton);
      expect(passwordInput).toHaveAttribute("type", "text");

      await userEvent.click(visibilityButton);
      expect(passwordInput).toHaveAttribute("type", "password");
    });

    it("should show 'username is required' when the user clears the input or leaves it empty", async () => {
      const usernameInput = getters.getUsernameInput();

      await userEvent.type(usernameInput, "user");
      await userEvent.clear(usernameInput);
      await userEvent.click(document.body);

      const validationMessage =
        await screen.findByText(/username is required/i);
      expect(validationMessage).toBeInTheDocument();
    });

    it("should show 'password is required' when the user clears the input or leaves it empty", async () => {
      const passwordInput = getters.getPasswordInput();

      await userEvent.type(passwordInput, "password");
      await userEvent.clear(passwordInput);
      await userEvent.click(document.body);

      const validationMessage =
        await screen.findByText(/password is required/i);
      expect(validationMessage).toBeInTheDocument();
    });

    it("should show error message if the username is less than 3 characters", async () => {
      const usernameInput = getters.getUsernameInput();

      await userEvent.type(usernameInput, "us");
      await userEvent.click(document.body);

      const validationMessage = await screen.findByText(
        /username must be at least 3 characters/i
      );

      expect(validationMessage).toBeInTheDocument();
    });

    it("should show error message if the password is less than 3 characters", async () => {
      const passwordInput = getters.getPasswordInput();

      await userEvent.type(passwordInput, "pa");
      await userEvent.click(document.body);

      const validationMessage = await screen.findByText(
        /password must be at least 3 characters/i
      );

      expect(validationMessage).toBeInTheDocument();
    });
  });
});
