import { configureStore } from "@reduxjs/toolkit";
import { SnackbarState } from "../types";
import snackbarReducer from "../snackbarSlice";

export const initialState: SnackbarState = {
  isOpen: false,
  message: "",
  title: "",
  severity: "info",
  variant: "filled",
  autoHideDuration: 6000,
  icon: undefined,
  alertAction: null,
  anchorOrigin: { vertical: "top", horizontal: "center" },
};

export const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
  },
});
