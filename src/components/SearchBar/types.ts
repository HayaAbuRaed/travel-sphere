import { GridProps } from "@mui/material";
import { PropsWithChildren } from "react";
import { SearchRequest } from "./API/types";

export interface FieldWrapperProps extends PropsWithChildren, GridProps {
  icon?: JSX.Element;
  pointer?: true;
}

export interface DateRange {
  startDate: Date;
  endDate: Date;
}

export interface FormikSearchPayload
  extends Omit<SearchRequest, "checkInDate" | "checkOutDate"> {
  dateRange: DateRange;
}
