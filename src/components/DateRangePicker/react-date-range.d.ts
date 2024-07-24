declare module "react-date-range" {
  import { ComponentType } from "react";

  export interface Range {
    startDate: Date;
    endDate: Date;
    key: string;
    color?: string;
  }

  export interface RangeKeyDict {
    [key: string]: Range;
  }

  export interface DateRangePickerProps {
    ranges: Range[];
    onChange: (ranges: RangeKeyDict) => void;
    minDate?: Date;
  }

  export const DateRangePicker: ComponentType<DateRangePickerProps>;
}
