import { Grid } from "@mui/material";
import { FC } from "react";
import HeroSection from "./components/HeroSection";

const Home: FC = () => {
  return (
    <Grid container>
      <HeroSection />
    </Grid>
  );
};

export default Home;
