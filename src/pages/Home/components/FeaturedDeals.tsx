import { Grid, Stack } from "@mui/material";
import { FC } from "react";
import Carousel from "react-multi-carousel";
import HotelCard from "src/components/HotelCard";
import { featuredDealsCarouselProps } from "../constants";
import useGetFeaturedDeals from "../hook/useGetFeaturedDeals";
import styles from "../style.module.css";
import { mapDealToHotel } from "../utils";
import "./carousel.css";
import CarouselSkeleton from "./CarouselSkeleton";
import SectionTitle from "./SectionTitle";

const FeaturedDeals: FC = () => {
  const { featuredDeals, isFetching } = useGetFeaturedDeals();

  return (
    <Grid
      container
      item
      xs={12}
      px={{ xs: 3, md: 6 }}
      className={styles.sectionContainer}
    >
      <SectionTitle title="featured deals" />

      {isFetching && <CarouselSkeleton />}

      {featuredDeals && (
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
      )}
    </Grid>
  );
};

export default FeaturedDeals;
