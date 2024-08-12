import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import home from "src/assets/home2.png";
import icon from "src/assets/icon2.png";
import sky from "src/assets/videos/sky.mp4";
import styles from "../style.module.css";
import { useNavigate } from "react-router-dom";

const HeroSection: FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => navigate("/login");

  return (
    <Grid
      item
      xs={12}
      className={styles.heroSection}
      maxHeight={{ xs: 390, sm: 510, md: 660, lg: "100vh" }}
    >
      {/* Background */}
      <Stack className={styles.videoBackgroundContainer}>
        <Box className={styles.overlay} />
        <video autoPlay loop muted className={styles.video}>
          <source src={sky} type="video/mp4" />
        </video>
      </Stack>
      <Stack
        flexDirection="row"
        alignItems="center"
        py={{ xs: 3, sm: 2 }}
        px={{ xs: 2, sm: 5 }}
      >
        <Typography variant="h6" className={styles.logo}>
          <Avatar
            src={icon}
            alt="TravelSphere"
            sx={{ width: 46, height: 46 }}
          />
          <Box className={styles.appTitle}>TravelSphere</Box>
        </Typography>

        <Stack flexDirection={{ sm: "row" }} gap={0.5} ml="auto">
          <Button
            variant="outlined"
            color="primary"
            disableElevation
            className={styles.button}
          >
            Register
          </Button>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            className={styles.button}
            onClick={handleLoginClick}
          >
            Log in
          </Button>
        </Stack>
      </Stack>

      <Stack
        pt={2}
        gap={2}
        alignItems="center"
        justifyContent="center"
        px={{ xs: 2, sm: 5 }}
      >
        <Typography component="h1" variant="h2" className={styles.heading}>
          Welcome to TravelSphere
        </Typography>
        <Typography variant="h5" className={styles.subHeading}>
          Book, organize and control your business travel, all in one place. For
          faster admin, better decision-making and smarter spending.
        </Typography>
      </Stack>

      <Stack alignItems="center" pt={2}>
        <img src={home} alt="home screenshot" className={styles.heroImage} />
      </Stack>
    </Grid>
  );
};

export default HeroSection;
