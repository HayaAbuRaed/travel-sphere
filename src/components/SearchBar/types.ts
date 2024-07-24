import { GridProps } from "@mui/material";
import { PropsWithChildren } from "react";

export interface FieldWrapperProps extends PropsWithChildren, GridProps {
  icon?: JSX.Element;
  pointer?: true;
}
