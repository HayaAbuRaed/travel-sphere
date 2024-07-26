import { Grid } from "@mui/material";
import { FC } from "react";
import FeaturedDeals from "./components/FeaturedDeals";
import HeroSection from "./components/HeroSection";
import RecentlyVisited from "./components/RecentlyVisited";
import TrendingDestinations from "./components/TrendingDestinations";

const Home: FC = () => (
  <Grid container rowGap={8} pb={10}>
    <HeroSection />
    <FeaturedDeals />
    <TrendingDestinations />
    <RecentlyVisited />
  </Grid>
);

export default Home;
