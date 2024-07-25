import { Grid, Stack } from "@mui/material";
import { FC } from "react";
import HotelCard from "src/components/HotelCard";
import useGetFeaturedDeals from "../hook/useGetFeaturedDeals";
import styles from "../style.module.css";
import { mapDealToHotel } from "../utils";

const FeaturedDeals: FC = () => {
  const { featuredDeals, isFetching } = useGetFeaturedDeals();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!featuredDeals) {
    return <div>No data found</div>;
  }

  return (
    <Grid container item xs={12} px={6} columnGap={1.5}>
      {featuredDeals.map((deal) => (
        <Grid item xs>
          <HotelCard hotel={mapDealToHotel(deal)} action={() => {}}>
            <Stack className={styles.overViewContainer}>
              <HotelCard.Rating />
              <HotelCard.PriceSegment />
            </Stack>
            <HotelCard.Heading />
            <HotelCard.DiscountChip />
            <HotelCard.Description />
            <HotelCard.InfoCard showHotel />
          </HotelCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturedDeals;
