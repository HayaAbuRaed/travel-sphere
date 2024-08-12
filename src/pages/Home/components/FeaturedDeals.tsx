import { Grid } from "@mui/material";
import { FC } from "react";
import styles from "../style.module.css";
import SectionTitle from "./SectionTitle";
import FeaturedDealsComponent from "src/components/FeaturedDeals";

const FeaturedDeals: FC = () => {
  return (
    <Grid
      container
      item
      xs={12}
      px={{ xs: 3, md: 6 }}
      className={styles.sectionContainer}
    >
      <SectionTitle title="featured deals" />

      <FeaturedDealsComponent />
    </Grid>
  );
};

export default FeaturedDeals;
