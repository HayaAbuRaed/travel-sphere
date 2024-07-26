import PeopleIcon from "@mui/icons-material/PeopleAltOutlined";
import { Grid, Menu, Stack, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import { FC, useState } from "react";
import FieldWrapper from "./FieldWrapper";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CounterField from "./CounterField";
import { FormikSearchPayload } from "src/types/search";

const RoomGuestSelector: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const {
    values: { adults, children, numberOfRooms },
  } = useFormikContext<FormikSearchPayload>();

  const handleCloseMenu = () => setAnchorEl(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const addTrailingS = (value: number, word: string) => {
    return value > 1 ? `${word}s` : word;
  };

  return (
    <>
      <FieldWrapper md icon={<PeopleIcon />} onClick={handleOpenMenu} pointer>
        <Stack width="100%" flexDirection="row" gap={1}>
          <Typography variant="body2" sx={{ wordSpacing: 3 }}>
            {adults} {addTrailingS(adults, "adult")} •&nbsp;
            {children} {children === 1 ? "child" : "children"} •&nbsp;
            {numberOfRooms} {addTrailingS(numberOfRooms, "room")}
          </Typography>

          <ExpandMoreIcon fontSize="small" sx={{ ml: "auto" }} />
        </Stack>
      </FieldWrapper>

      <Menu
        anchorEl={anchorEl}
        id="data-range-picker-menu"
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        sx={{ "& .MuiMenu-list": { p: 2 } }}
      >
        <Grid container rowGap={1} maxWidth="210px">
          <CounterField name="adults" preventDecrementOn={1} />
          <CounterField name="children" />
          <CounterField
            name="numberOfRooms"
            preventDecrementOn={1}
            displayName="rooms"
          />
        </Grid>
      </Menu>
    </>
  );
};

export default RoomGuestSelector;
