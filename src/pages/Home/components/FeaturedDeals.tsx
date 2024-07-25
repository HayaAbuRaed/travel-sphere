import { Grid, Stack } from "@mui/material";
import { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HotelCard from "src/components/HotelCard";
import { featuredDealsCarouselProps } from "../constants";
import useGetFeaturedDeals from "../hook/useGetFeaturedDeals";
import styles from "../style.module.css";
import { mapDealToHotel } from "../utils";
import "./carousel.css";

const FeaturedDeals: FC = () => {
  const { featuredDeals, isFetching } = useGetFeaturedDeals();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!featuredDeals) {
    return <div>No data found</div>;
  }

  return (
    <Grid
      container
      item
      xs={12}
      pb={4}
      px={{ xs: 3, md: 6 }}
      columnGap={1.5}
      position="relative"
    >
      <Carousel {...featuredDealsCarouselProps}>
        {featuredDeals.map((deal) => (
          <HotelCard
            key={`deal${deal.hotelId}`}
            hotel={mapDealToHotel(deal)}
            action={() => {}}
          >
            <Stack className={styles.overViewContainer}>
              <HotelCard.Rating />
              <HotelCard.PriceSegment />
            </Stack>
            <HotelCard.Heading />
            <HotelCard.DiscountChip />
            <HotelCard.Description />
            <HotelCard.InfoCard showHotel />
          </HotelCard>
        ))}
      </Carousel>
    </Grid>
  );
};

export default FeaturedDeals;
