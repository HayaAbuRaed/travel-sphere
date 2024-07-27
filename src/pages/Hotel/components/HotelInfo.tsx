import { Grid, Rating, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { HotelInfoProps } from "../types";
import useGetHotel from "../hooks/useGetHotel";
import ReviewsList from "./ReviewsList";

const HotelInfo: FC<HotelInfoProps> = ({ id }) => {
  const { hotel, isFetching } = useGetHotel(id);

  if (isFetching) return <div>Loading...</div>;

  if (!hotel) return null;

  const { hotelName, starRating, description } = hotel;

  return (
    <Grid container item xs={4} pr={3} gap={2.5} borderRight={"1px #ccc solid"}>
      <Stack gap={1}>
        <Rating name="read-only" value={starRating} readOnly />
        <Typography component="h2" variant="h5">
          {hotelName}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Stack>

      <ReviewsList id={id} />
    </Grid>
  );
};

export default HotelInfo;
