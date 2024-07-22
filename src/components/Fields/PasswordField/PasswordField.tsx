import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  IconButton,
  InputAdornment,
  TextField as MuiTextField,
} from "@mui/material";
import { useField } from "formik";
import { FC, MouseEvent, useState } from "react";
import { PasswordFieldProps } from "./types";

const PasswordField: FC<PasswordFieldProps> = ({ name, ...rest }) => {
  const [field, meta] = useField<string>(name);
  const [showPassword, setShowPassword] = useState(false);

  const muiTextFieldProps = { ...field, ...rest };

  if (meta && meta.touched && meta.error) {
    muiTextFieldProps.error = true;
    muiTextFieldProps.helperText = meta.error;
  }

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <MuiTextField
      type={showPassword ? "text" : "password"}
      {...muiTextFieldProps}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;
