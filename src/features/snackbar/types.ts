import { AlertColor, AlertProps, SnackbarOrigin } from "@mui/material";
import { ReactNode } from "react";

export interface SnackbarState {
  isOpen: boolean;
  message: ReactNode;
  title: ReactNode;
  severity: AlertColor | undefined;
  variant: AlertProps["variant"];
  autoHideDuration: number | null;
  icon: ReactNode;
  anchorOrigin: SnackbarOrigin;
  alertAction: ReactNode;
}

export interface ShowSnackbarPayload {
  message: ReactNode;
  title?: ReactNode;
  severity?: AlertColor;
  variant?: AlertProps["variant"];
  autoHideDuration?: number | null;
  icon?: ReactNode;
  alertAction?: ReactNode;
  anchorOrigin?: SnackbarOrigin;
}

export interface CustomShowSnackbarPayload
  extends Omit<ShowSnackbarPayload, "severity"> {}
