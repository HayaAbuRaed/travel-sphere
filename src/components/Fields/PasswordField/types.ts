import { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";

export type PasswordFieldProps = Omit<MuiTextFieldProps, "name" | "type"> & {
  name: string;
};
