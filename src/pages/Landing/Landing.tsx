import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import FeaturedDeals from "src/components/FeaturedDeals";
import SplashScreen from "src/components/SplashScreen";
import Footer from "src/containers/Footer";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import styles from "./style.module.css";
import GallerySection from "./components/GallerySection";

const Landing: FC = () => {
  return (
    <Grid container sx={{ position: "relative", overflowX: "hidden" }}>
      <SplashScreen />

      <HeroSection />

      <IntroSection />

      {/* Featured Deals Section */}
      <Grid
        item
        container
        xs={12}
        className={styles.section}
        minHeight={{ lg: "100vh" }}
      >
        <Typography component={Box} variant="h5" px={{ xs: 3, md: 6 }}>
          Our&nbsp;
          <Typography variant="h4" className={styles.highlight}>
            Featured Deals
          </Typography>
        </Typography>
        <FeaturedDeals />
      </Grid>

      {/* Question Segment */}
      <Grid item xs={12} className={styles.questionSection}>
        <Box className={styles.overlay} />
        <Typography variant="h4" className={styles.aboveOverlay}>
          Ready to travel with&nbsp;
          <Box className={styles.highlight}>
            Real Adventure & Enjoy Natural?
          </Box>
        </Typography>
      </Grid>

      {/* Gallery Section */}
      <Grid
        item
        container
        xs={12}
        className={styles.section}
        justifyContent="center"
      >
        <GallerySection />
      </Grid>

      {/* Motivation Segment */}
      <Grid item xs={12} className={styles.motivationSection}>
        <Box className={styles.overlay} />
        <Typography variant="h4" className={styles.aboveOverlay}>
          We’ll do the <Box className={styles.highlight}>searching,</Box>
          You do the <Box className={styles.highlight}>saving!</Box>
        </Typography>
      </Grid>

      <Footer />
    </Grid>
  );
};

export default Landing;
