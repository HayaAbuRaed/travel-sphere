import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import HeroSection from "./components/HeroSection";
import styles from "./style.module.css";
import IntroSection from "./components/IntroSection";
import FeaturedDeals from "src/components/FeaturedDeals";

const Landing: FC = () => {
  return (
    <Grid container>
      <Grid item xs={12} className={styles.heroSection}>
        <HeroSection />
      </Grid>

      <IntroSection />

      <Grid item container xs={12} className={styles.section} p={5}>
        <Typography component={Box} variant="h5" px={{ xs: 3, md: 6 }}>
          Our&nbsp;
          <Typography variant="h4" fontWeight={600} display="inline-block">
            Featured Deals
          </Typography>
        </Typography>
        <FeaturedDeals />
      </Grid>

      <Grid item xs={12} className={styles.heroSection}>
        Section 3
      </Grid>
    </Grid>
  );
};

export default Landing;
