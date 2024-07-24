import { Box, Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import styles from "../style.module.css";
import SearchBar from "src/components/SearchBar";
import SparkIcon from "@mui/icons-material/AutoAwesomeOutlined";

const HeroSection: FC = () => {
  return (
    <Grid item xs={12} position={"relative"}>
      <Box className={styles.coverContainer}>
        <Stack
          className={styles.overlay}
          spacing={2}
          pr={{ xs: 1, sm: 14 }}
          pl={{ xs: 4, md: 6 }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ fontSize: { xs: "1.6rem", sm: "2rem" } }}
          >
            Simpler, Smarter Travel
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
            display="flex"
            alignItems="center"
            gap={0.5}
          >
            Book, organize and control your travel, all in one place
            <SparkIcon fontSize="small" color="primary" />
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
