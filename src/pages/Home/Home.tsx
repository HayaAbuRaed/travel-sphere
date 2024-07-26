import { Grid } from "@mui/material";
import { FC } from "react";
import HeroSection from "./components/HeroSection";
import FeaturedDeals from "./components/FeaturedDeals";
import RecentlyVisited from "./components/RecentlyVisited";
import CarouselTester from "./components/Carousel";
import TrendingDestinations from "./components/TrendingDestinations";

const Home: FC = () => {
  return (
    <Grid container rowGap={5}>
      <HeroSection />
      <CarouselTester />
      <FeaturedDeals />
      <TrendingDestinations />
      <RecentlyVisited />
    </Grid>
  );
};

export default Home;
