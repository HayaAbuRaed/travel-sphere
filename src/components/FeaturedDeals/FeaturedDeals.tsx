import { Grid, Stack } from "@mui/material";
import { FC } from "react";
import Carousel from "react-multi-carousel";
import { useNavigate } from "react-router-dom";
import HotelCard from "src/components/HotelCard";
import selectUser from "src/features/user/selectors";
import { useAppSelector } from "src/store/hooks";
import CarouselSkeleton from "../CarouselSkeleton";
import "./carousel.css";
import { featuredDealsCarouselProps } from "./constants";
import useGetFeaturedDeals from "./hooks/useGetFeaturedDeals";
import styles from "./style.module.css";
import { mapDealToHotel } from "./utils";

const FeaturedDeals: FC = () => {
  const { featuredDeals, isFetching } = useGetFeaturedDeals();

  const navigate = useNavigate();

  const { isAuthenticated } = useAppSelector(selectUser);

  const handleHotelCardAction = (hotelId: number) => {
    isAuthenticated ? navigate(`/me/hotels/${hotelId}`) : navigate(`/login`);
  };

  return (
    <Grid
      container
      item
      xs={12}
      px={{ xs: 3, md: 6 }}
      className={styles.container}
    >
      {isFetching && (
        <CarouselSkeleton carouselProps={featuredDealsCarouselProps} />
      )}

      {featuredDeals && !isFetching && (
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
