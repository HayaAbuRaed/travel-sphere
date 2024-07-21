import { ShowSnackbarPayload, SnackbarState } from "./types";

export const showSnackbarHelper = (
  state: SnackbarState,
  payload: ShowSnackbarPayload
) => {
  const {
    message,
    title = null,
    severity = "info",
    variant = "standard",
    autoHideDuration = 6000,
    icon,
    alertAction,
    anchorOrigin = { vertical: "top", horizontal: "center" },
  } = payload;

  state.isOpen = true;
  state.message = message;
  state.title = title;
  state.severity = severity;
  state.variant = variant;
  state.autoHideDuration = autoHideDuration;
  state.icon = icon;
  state.alertAction = alertAction;
  state.anchorOrigin = anchorOrigin;
};
