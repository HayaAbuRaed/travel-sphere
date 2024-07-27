import { Grid } from "@mui/material";
import { LatLngExpression } from "leaflet";
import { FC } from "react";
import { useParams } from "react-router-dom";
import Gallery from "./components/Gallery";
import HotelInfo from "./components/HotelInfo";
import ReviewsList from "./components/ReviewsList";
import useGetHotel from "./hooks/useGetHotel";
import Map from "./components/Map";

const Hotel: FC = () => {
  const { id: paramsId } = useParams();

  const { hotel, isFetching } = useGetHotel(parseInt(paramsId ?? "-1"));

  const id = parseInt(paramsId ?? "-1");

  if (isFetching) return <div>Loading...</div>;

  if (!hotel) return null;

  const { latitude, longitude, ...rest } = hotel;

  const position: LatLngExpression = [latitude, longitude];

  return (
    <Grid container p={5} gap={3} sx={{ backgroundColor: "#f8f8f8" }}>
      <HotelInfo hotel={rest} />

      <Grid item container xs={12} gap={3}>
        <Gallery id={id} />

        <Grid
          container
          item
          xs={12}
          sm={4}
          maxHeight={746}
          display="flex"
          direction="column"
          justifyContent="space-between"
        >
          <ReviewsList id={id} />
          <Map position={position} label={rest.hotelName} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hotel;
