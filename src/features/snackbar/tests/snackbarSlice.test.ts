import store from "src/store";
import {
  hideSnackbar,
  showErrorSnackbar,
  showSnackbar,
  showSuccessSnackbar,
  showWarningSnackbar,
} from "../snackbarSlice";
import {
  CustomShowSnackbarPayload,
  ShowSnackbarPayload,
  SnackbarState,
} from "../types";
import { initialState } from "./fixures";

describe("snackbarSlice", () => {
  it("should return the initial state", () => {
    expect(store.getState().snackbar).toEqual(initialState);
  });

  it("should handle showSnackbar", () => {
    const payload: ShowSnackbarPayload = {
      message: "This is a snackbar message",
      title: "Snackbar Title",
      severity: "info",
      variant: "filled",
      autoHideDuration: 5000,
      icon: "info-icon",
      alertAction: "Action",
      anchorOrigin: { vertical: "top", horizontal: "left" },
    };

    const expectedState = {
      ...initialState,
      ...payload,
      isOpen: true,
    };

    store.dispatch(showSnackbar(payload));
    expect(store.getState().snackbar).toEqual(expectedState);
  });

  it("should handle showSuccessSnackbar", () => {
    const payload: CustomShowSnackbarPayload = {
      message: "Success message",
      title: "Success Title",
      variant: "filled",
      autoHideDuration: 4000,
      icon: "success-icon",
      alertAction: "Success Action",
      anchorOrigin: { vertical: "bottom", horizontal: "right" },
    };

    const expectedState = {
      ...initialState,
      ...payload,
      severity: "success",
      isOpen: true,
    };

    store.dispatch(showSuccessSnackbar(payload));
    expect(store.getState().snackbar).toEqual(expectedState);
  });

  it("should handle showErrorSnackbar", () => {
    const payload: CustomShowSnackbarPayload = {
      message: "Error occurred",
      title: "Error Title",
      variant: "standard",
      autoHideDuration: 6000,
      icon: "error-icon",
      alertAction: "Error Action",
      anchorOrigin: { vertical: "bottom", horizontal: "center" },
    };

    const expectedState = {
      ...initialState,
      ...payload,
      severity: "error",
      isOpen: true,
    };

    store.dispatch(showErrorSnackbar(payload));
    expect(store.getState().snackbar).toEqual(expectedState);
  });

  it("should handle showWarningSnackbar", () => {
    const payload: CustomShowSnackbarPayload = {
      message: "Warning message",
      title: "Warning Title",
      variant: "outlined",
      autoHideDuration: 7000,
      icon: "warning-icon",
      alertAction: "Warning Action",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    };

    const expectedState = {
      ...initialState,
      ...payload,
      severity: "warning",
      isOpen: true,
    };

    store.dispatch(showWarningSnackbar(payload));
    expect(store.getState().snackbar).toEqual(expectedState);
  });

  it("should handle hideSnackbar", () => {
    const payload: ShowSnackbarPayload = {
      message: "Temporary message",
      title: "Temporary title",
      severity: "info",
      variant: "filled",
      autoHideDuration: 6000,
      icon: "info-icon",
      alertAction: "Action",
      anchorOrigin: { vertical: "top", horizontal: "left" },
    };

    store.dispatch(showSnackbar(payload));

    store.dispatch(hideSnackbar());

    const expectedState: SnackbarState = {
      ...initialState,
      ...payload,
      isOpen: false,
    };

    expect(store.getState().snackbar).toEqual(expectedState);
  });
});
