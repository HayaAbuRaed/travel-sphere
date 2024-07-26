import { Grid } from "@mui/material";
import { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HotelCard from "src/components/HotelCard";
import { recentlyVisitedCarouselProps } from "../constants";
import useGetRecentlyVisitedHotels from "../hook/useGetRecentlyVisitedHotels";
import { formatDisplayDate, mapRecentlyVisitedHotelToHotel } from "../utils";
import "./carousel.css";
import SectionTitle from "./SectionTitle";

const RecentlyVisited: FC = () => {
  const { recentHotels, isFetching } = useGetRecentlyVisitedHotels();

  if (isFetching) return <div>Loading...</div>;

  if (!recentHotels) return null;

  return (
    <Grid
      container
      columnGap={1}
      item
      xs={12}
      px={6}
      position="relative"
      pb={4}
    >
      <SectionTitle title="recently visited hotels" />

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
    </Grid>
  );
};

export default RecentlyVisited;
