import { FC } from "react";
import FeaturedDeals from "./components/FeaturedDeals";
import HeroSection from "./components/HeroSection";
import RecentlyVisited from "./components/RecentlyVisited";
import TrendingDestinations from "./components/TrendingDestinations";
import { Grid } from "@mui/material";

const UserHome: FC = () => (
  <Grid container rowGap={8} pb={10}>
    <HeroSection />
    <FeaturedDeals />
    <TrendingDestinations />
    <RecentlyVisited />
  </Grid>
);

export default UserHome;
