import { FC } from "react";
import { TextFieldProps } from "./types";
import { TextField as MuiTextField } from "@mui/material";
import { useField } from "formik";

const TextField: FC<TextFieldProps> = ({ name, ...rest }) => {
  const [field, meta] = useField<string>(name);

  const muiTextFieldProps = {
    ...field,
    ...rest,
  };

  if (meta && meta.touched && meta.error) {
    muiTextFieldProps.error = true;
    muiTextFieldProps.helperText = meta.error;
  }

  return <MuiTextField {...muiTextFieldProps} />;
};

export default TextField;
