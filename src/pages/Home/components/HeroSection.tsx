import { Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import styles from "../style.module.css";

const HeroSection: FC = () => {
  return (
    <Grid item xs={12} position={"relative"} className={styles.coverContainer}>
      <Stack className={styles.overlay} spacing={2} pr={{ xs: 1, sm: 14 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{ fontSize: { xs: "1.6rem", sm: "2rem" } }}
        >
          Simpler, Smarter Travel
        </Typography>
        <Typography sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}>
          Book, organize and control your travel, all in one place ✨
        </Typography>
      </Stack>
    </Grid>
  );
};

export default HeroSection;
