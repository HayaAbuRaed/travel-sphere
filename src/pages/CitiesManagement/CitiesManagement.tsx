import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import CitiesDataGrid from "./components/CitiesDataGrid";

document.title = "Cities Management";

const CitiesManagement: FC = () => {
  return (
    <Grid container px={7} py={5} rowGap={3}>
      <Typography component="h1" variant="h5">
        Cities
      </Typography>
      <CitiesDataGrid />
    </Grid>
  );
};

export default CitiesManagement;
