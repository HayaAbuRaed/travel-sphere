import { addDays } from "date-fns";
import { FC, useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
// import "../style.css"; // just uncomment it to remove the predefined date ranges form

const DateRangePickerComponent: FC = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges: RangeKeyDict) => {
    setState([ranges.selection]);
  };

  return <DateRangePicker ranges={state} onChange={handleSelect} />;
};

export default DateRangePickerComponent;
