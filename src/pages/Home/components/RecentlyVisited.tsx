import { Grid } from "@mui/material";
import { FC } from "react";
import Carousel from "react-multi-carousel";
import HotelCard from "src/components/HotelCard";
import { recentlyVisitedCarouselProps } from "../constants";
import useGetRecentlyVisitedHotels from "../hook/useGetRecentlyVisitedHotels";
import styles from "../style.module.css";
import { formatDisplayDate, mapRecentlyVisitedHotelToHotel } from "../utils";
import "./carousel.css";
import CarouselSkeleton from "./CarouselSkeleton";
import SectionTitle from "./SectionTitle";

const RecentlyVisited: FC = () => {
  const { recentHotels, isFetching } = useGetRecentlyVisitedHotels();

  return (
    <Grid
      container
      item
      xs={12}
      px={{ xs: 3, md: 6 }}
      className={styles.sectionContainer}
    >
      <SectionTitle title="recently visited hotels" />

      {isFetching && <CarouselSkeleton />}

      {recentHotels && (
        <Carousel {...recentlyVisitedCarouselProps}>
          {recentHotels.map((hotel) => (
            <Grid
              item
              xs
              key={`hotel${hotel.hotelId}`}
              onClick={() => {}}
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
