import { Grid } from "@mui/material";
import { FC } from "react";
import { FieldWrapperProps } from "../types";

const FieldWrapper: FC<FieldWrapperProps> = ({
  children,
  icon,
  pointer,
  ...rest
}) => {
  return (
    <Grid
      item
      xs={12}
      display="flex"
      alignItems="center"
      p={2}
      gap={1}
      sx={{
        backgroundColor: "background.paper",
        borderRadius: 1,
        cursor: pointer ? "pointer" : "default",
      }}
      {...rest}
    >
      {icon}
      {children}
    </Grid>
  );
};

export default FieldWrapper;
