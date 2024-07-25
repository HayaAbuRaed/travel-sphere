import { Grid } from "@mui/material";
import { FC } from "react";
import HotelCard from "src/components/HotelCard";
import useGetRecentlyVisitedHotels from "../hook/useGetRecentlyVisitedHotels";
import { formatDisplayDate, mapRecentlyVisitedHotelToHotel } from "../utils";
// import styles from "../style.module.css";

const RecentlyVisited: FC = () => {
  const { recentHotels, isFetching } = useGetRecentlyVisitedHotels();

  if (isFetching) return <div>Loading...</div>;

  if (!recentHotels) return null;

  return (
    <Grid container columnGap={1} item xs={12} px={6}>
      {recentHotels.map((hotel) => (
        <Grid item xs onClick={() => {}} sx={{ cursor: "pointer" }}>
          <HotelCard hotel={mapRecentlyVisitedHotelToHotel(hotel)}>
            <HotelCard.Rating />
            <HotelCard.Heading subtitle={formatDisplayDate(hotel.visitDate)} />
            <HotelCard.Description />
            <HotelCard.InfoCard showPrice />
          </HotelCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecentlyVisited;
