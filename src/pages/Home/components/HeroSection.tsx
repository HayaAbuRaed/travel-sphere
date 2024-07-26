import SparkIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import SearchBar from "src/components/SearchBar";
import styles from "../style.module.css";
import homeCover from "src/assets/homeCover.jpg";

const HeroSection: FC = () => {
  return (
    <Grid item xs={12} position={"relative"}>
      <Box
        className={styles.coverContainer}
        style={{ backgroundImage: `url(${homeCover})` }}
      >
        <Stack
          className={styles.overlay}
          gap={2}
          p={{ xs: "4em 0.5em 0 2em", md: "6.5em 7em 0 3em" }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ fontSize: { xs: "1.6rem", sm: "2rem" } }}
          >
            Simpler, Smarter Travel
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}>
            Book, organize and control your travel, all in one place
            <SparkIcon color="primary" sx={{ pt: 1, pl: 1 }} />
          </Typography>
        </Stack>
      </Box>

      <Box pt={{ xs: 25, md: 32 }}>
        <SearchBar />
      </Box>
    </Grid>
  );
};

export default HeroSection;
