import { useField, useFormikContext } from "formik";
import { FC } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import theme from "src/style/travelSphereTheme";
import "../style.css";

export interface FormikDateRangePickerProps {
  name: string;
}

const FormikDateRangePicker: FC<FormikDateRangePickerProps> = ({ name }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const handleSelect = (ranges: RangeKeyDict) => {
    setFieldValue(name, {
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
    });
  };

  return (
    <DateRangePicker
      ranges={[
        {
          startDate: field.value.startDate || new Date(),
          endDate: field.value.endDate || new Date(),
          key: "selection",
          color: theme.palette.secondary.main,
        },
      ]}
      onChange={handleSelect}
      minDate={new Date()}
      // className={styles.dateRangePicker}
    />
  );
};

export default FormikDateRangePicker;
