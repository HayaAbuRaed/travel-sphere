import { Box, Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import introImage from "src/assets/intro.png";
import styles from "../style.module.css";
import { STATISTICS } from "../constants";

const IntroSection: FC = () => {
  return (
    <Grid
      item
      xs={12}
      container
      p={5}
      columnGap={4}
      rowGap={3}
      justifyContent="center"
      bgcolor="#f1f1f1"
    >
      <Stack
        component={Grid}
        item
        xs={12}
        md
        justifyContent="center"
        alignItems="center"
        gap={5}
        maxWidth={{ xs: 700 }}
      >
        <Typography variant="h3">
          The <Box className={styles.highlight}>Best</Box> and&nbsp;
          <Box className={styles.highlight}>Most Trusted</Box> Service
        </Typography>
        <Typography>
          At TS platform, we ensure our customers receive excellent
          entertainment and a seamless travel experience. Rest assured, you’ll
          have a complete understanding of your trip with us. We guarantee a
          shortage-free experience, regardless of the destination.
        </Typography>

        <Grid container columnGap={2} justifyContent="center" maxWidth={500}>
          {STATISTICS.map(({ value, title }, index) => (
            <Stack
              component={Grid}
              xs
              item
              key={index}
              alignItems="center"
              gap={1}
            >
              <Typography
                component={Stack}
                variant="h6"
                bgcolor="secondary.main"
                className={styles.statisticValue}
              >
                {value}
              </Typography>
              <Typography variant="subtitle1" fontWeight={500}>
                {title}
              </Typography>
            </Stack>
          ))}
        </Grid>
      </Stack>

      <Grid
        item
        container
        xs={12}
        md={5}
        alignItems="center"
        justifyContent="center"
      >
        <img src={introImage} className={styles.introImage} />
      </Grid>
    </Grid>
  );
};

export default IntroSection;
