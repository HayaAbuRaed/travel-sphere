import CalenderIcon from "@mui/icons-material/DateRangeOutlined";
import { Menu, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import { FC, useState } from "react";
import FormikDateRangePicker from "src/components/DateRangePicker/FormikDateRangePicker";
import { FormikSearchPayload } from "../types";
import { formatDisplayDate } from "../utils";
import FieldWrapper from "./FieldWrapper";

const DatePicker: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const {
    values: {
      dateRange: { startDate, endDate },
    },
  } = useFormikContext<FormikSearchPayload>();

  const handleCloseMenu = () => setAnchorEl(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  return (
    <>
      <FieldWrapper
        md={3}
        icon={<CalenderIcon />}
        onClick={handleOpenMenu}
        pointer
      >
        <Typography variant="body2">
          {formatDisplayDate(startDate)}
          <b>
            {"\u00A0"} - {"\u00A0"}
          </b>
          {formatDisplayDate(endDate)}
        </Typography>
      </FieldWrapper>

      <Menu
        anchorEl={anchorEl}
        id="data-range-picker-menu"
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        sx={{ "& .MuiMenu-list": { p: 2, pb: 1 } }}
      >
        <FormikDateRangePicker name="dateRange" />
      </Menu>
    </>
  );
};

export default DatePicker;
