import { Grid, Stack } from "@mui/material";
import { FC } from "react";
import Carousel from "react-multi-carousel";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const handleHotelCardAction = (hotelId: number) => {
    navigate(`hotels/${hotelId}`);
  };

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
              action={() => handleHotelCardAction(deal.hotelId)}
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
