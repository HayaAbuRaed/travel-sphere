import { styled } from "@mui/material/styles";
import TextField from "../Fields/TextField";

export const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },

  "& .MuiInputBase-input": {
    padding: 0,
  },
});
