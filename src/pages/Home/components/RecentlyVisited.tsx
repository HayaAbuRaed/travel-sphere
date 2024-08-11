import { Grid } from "@mui/material";
import { FC } from "react";
import Carousel from "react-multi-carousel";
import HotelCard from "src/components/HotelCard";
import { recentlyVisitedCarouselProps } from "../constants";
import useGetRecentlyVisitedHotels from "../hook/useGetRecentlyVisitedHotels";
import styles from "../style.module.css";
import { formatDisplayDate, mapRecentlyVisitedHotelToHotel } from "../utils";
import "./carousel.css";
import SectionTitle from "./SectionTitle";
import { useNavigate } from "react-router-dom";
import CarouselSkeleton from "src/components/CarouselSkeleton";

const RecentlyVisited: FC = () => {
  const { recentHotels, isFetching } = useGetRecentlyVisitedHotels();

  const navigate = useNavigate();

  const handleHotelCardClick = (hotelId: number) => {
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
      <SectionTitle title="recently visited hotels" />

      {isFetching && (
        <CarouselSkeleton carouselProps={recentlyVisitedCarouselProps} />
      )}

      {recentHotels && !isFetching && (
        <Carousel {...recentlyVisitedCarouselProps}>
          {recentHotels.map((hotel) => (
            <Grid
              item
              xs
              key={`hotel${hotel.hotelId}`}
              onClick={() => handleHotelCardClick(hotel.hotelId)}
              sx={{ cursor: "pointer" }}
            >
              <HotelCard hotel={mapRecentlyVisitedHotelToHotel(hotel)}>
                <HotelCard.Rating />
                <HotelCard.Heading
                  subtitle={formatDisplayDate(hotel.visitDate)}
                />
                <HotelCard.Description />
                <HotelCard.InfoCard showPrice />
              </HotelCard>
            </Grid>
          ))}
        </Carousel>
      )}
    </Grid>
  );
};

export default RecentlyVisited;
