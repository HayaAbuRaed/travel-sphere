import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CustomShowSnackbarPayload,
  ShowSnackbarPayload,
  SnackbarState,
} from "./types";
import { showSnackbarHelper } from "./utils";

const initialState: SnackbarState = {
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

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<ShowSnackbarPayload>) => {
      showSnackbarHelper(state, action.payload);
    },

    showSuccessSnackbar: (
      state,
      action: PayloadAction<CustomShowSnackbarPayload>
    ) => {
      const payload: ShowSnackbarPayload = {
        ...action.payload,
        severity: "success",
      };
      showSnackbarHelper(state, payload);
    },

    showErrorSnackbar: (
      state,
      action: PayloadAction<CustomShowSnackbarPayload>
    ) => {
      const payload: ShowSnackbarPayload = {
        ...action.payload,
        severity: "error",
      };
      showSnackbarHelper(state, payload);
    },

    showWarningSnackbar: (
      state,
      action: PayloadAction<CustomShowSnackbarPayload>
    ) => {
      const payload: ShowSnackbarPayload = {
        ...action.payload,
        severity: "warning",
      };
      showSnackbarHelper(state, payload);
    },

    hideSnackbar: (state) => {
      state.isOpen = false;
    },
  },
});

export const {
  showSnackbar,
  showSuccessSnackbar,
  showErrorSnackbar,
  showWarningSnackbar,
  hideSnackbar,
} = snackbarSlice.actions;

export default snackbarSlice.reducer;
