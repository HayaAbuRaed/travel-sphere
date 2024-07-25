import { Grid } from "@mui/material";
import { FC } from "react";
import HeroSection from "./components/HeroSection";
import FeaturedDeals from "./components/FeaturedDeals";

const Home: FC = () => {
  return (
    <Grid container rowGap={5}>
      <HeroSection />
      <FeaturedDeals />
    </Grid>
  );
};

export default Home;
