import { Grid } from "@mui/material";
import { FC } from "react";
import FeaturedDeals from "../Home/components/FeaturedDeals";
import HeroSection from "./components/HeroSection";
import styles from "./style.module.css";
import IntroSection from "./components/IntroSection";

const Landing: FC = () => {
  return (
    <Grid container>
      <Grid item xs={12} className={styles.heroSection}>
        <HeroSection />
      </Grid>

      <IntroSection />

      <Grid item xs={12} className={styles.section}>
        <FeaturedDeals />
      </Grid>

      <Grid item xs={12} className={styles.heroSection}>
        Section 3
      </Grid>
    </Grid>
  );
};

export default Landing;
