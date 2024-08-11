import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import home from "src/assets/home.png";
import icon from "src/assets/icon2.png";
import sky from "src/assets/videos/sky.mp4";
import styles from "../style.module.css";
import { useNavigate } from "react-router-dom";

const HeroSection: FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => navigate("/login");

  return (
    <>
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
        py={2}
        px={{ xs: 2, sm: 5 }}
      >
        <Typography variant="h6" className={styles.logo}>
          <Avatar
            src={icon}
            alt="TravelSphere"
            sx={{ width: 46, height: 46 }}
          />
          TravelSphere
        </Typography>

        <Stack flexDirection="row" gap={0.5} ml="auto">
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

      <Stack pt={2} alignItems="center" justifyContent="center" gap={2}>
        <Typography variant="h2" className={styles.heading}>
          Welcome to TravelSphere
        </Typography>
        <Typography variant="h5" className={styles.subHeading}>
          Book, organize and control your business travel, all in one place.
          <br /> For faster admin, better decision-making and smarter spending.
        </Typography>
      </Stack>

      <Stack alignItems="center" pt={2}>
        <img src={home} className={styles.heroImage} />
      </Stack>
    </>
  );
};

export default HeroSection;
