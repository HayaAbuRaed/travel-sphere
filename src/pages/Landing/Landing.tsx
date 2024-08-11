import {
  Box,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FC } from "react";
import FeaturedDeals from "src/components/FeaturedDeals";
import Footer from "src/containers/Footer";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import { IMAGES_LIST_DATA } from "./constants";
import styles from "./style.module.css";
import { srcset } from "./utils";

const Landing: FC = () => {
  const xsScreen = useMediaQuery("(max-width:600px)");

  return (
    <Grid container>
      <Grid item xs={12} className={styles.heroSection}>
        <HeroSection />
      </Grid>

      <IntroSection />

      <Grid item container xs={12} className={styles.section}>
        <Typography component={Box} variant="h5" px={{ xs: 3, md: 6 }}>
          Our&nbsp;
          <Typography variant="h4" className={styles.highlight}>
            Featured Deals
          </Typography>
        </Typography>
        <FeaturedDeals />
      </Grid>

      <Grid item xs={12} className={styles.questionSection}>
        <Box className={styles.overlay} />
        <Typography variant="h4" className={styles.aboveOverlay}>
          Ready to travel with&nbsp;
          <Box className={styles.highlight}>
            Real Adventure & Enjoy Natural?
          </Box>
        </Typography>
      </Grid>

      <Grid
        item
        container
        xs={12}
        className={styles.section}
        justifyContent="center"
      >
        <Stack gap={3}>
          <Typography variant="h5" textAlign="center">
            Visit our&nbsp;
            <Typography variant="h4" className={styles.highlight}>
              Customers Tour Gallery
            </Typography>
          </Typography>

          <Box maxWidth={{ xs: 300, sm: 500, md: 800 }}>
            <ImageList
              cols={4}
              variant="quilted"
              rowHeight={xsScreen ? 101 : 161}
            >
              {IMAGES_LIST_DATA.map(({ img, cols, rows }, index) => (
                <ImageListItem key={img} cols={cols || 1} rows={rows || 1}>
                  <img
                    {...srcset(img, 121, rows, cols)}
                    alt={`adventure-${index}`}
                    loading="lazy"
                    style={{ borderRadius: 16 }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Stack>
      </Grid>

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
