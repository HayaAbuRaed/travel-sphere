import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import AreaChart from "./components/AreaChart";
import { SlotState } from "./types";
import { useAppSelector } from "src/store/hooks";
import selectUser from "src/features/user/selectors";

const AdminHome: FC = () => {
  const [slot, setSlot] = useState<SlotState>("week");

  const { givenName } = useAppSelector(selectUser);

  const Name = () => (
    <Box
      display="inline-block"
      sx={{ color: (theme) => theme.palette.secondary.main }}
    >
      {givenName}
    </Box>
  );

  return (
    <Grid container p={4} rowGap={4} justifyContent="center">
      <Stack>
        <Typography variant="h1" fontWeight={600} fontSize="xx-large">
          Welcome {<Name />} - Master of the Grid
        </Typography>
        <Typography variant="subtitle1">
          Efficiently Manage, Monitor, and Secure Your Infrastructure.
        </Typography>
      </Stack>

      <Card sx={{ pt: 1, pr: 2, width: "100%", maxWidth: 900 }}>
        <Stack width="100%" direction="row" alignItems="center">
          <Typography variant="subtitle2" pl={2}>
            Reach
          </Typography>
          <Button
            size="small"
            onClick={() => setSlot("month")}
            sx={{
              color: slot === "month" ? "primary" : "grey.600",
              ml: "auto",
            }}
            variant={slot === "month" ? "outlined" : "text"}
          >
            Month
          </Button>
          <Button
            size="small"
            onClick={() => setSlot("week")}
            sx={{ color: slot === "week" ? "primary" : "grey.600" }}
            variant={slot === "week" ? "outlined" : "text"}
          >
            Week
          </Button>
        </Stack>
        <Box sx={{ pt: 1 }}>
          <AreaChart slot={slot} />
        </Box>
      </Card>
    </Grid>
  );
};

export default AdminHome;
