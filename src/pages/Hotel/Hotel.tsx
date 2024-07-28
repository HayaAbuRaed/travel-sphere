import { Grid, Typography } from "@mui/material";
import { LatLngExpression } from "leaflet";
import { FC } from "react";
import { useParams } from "react-router-dom";
import Gallery from "./components/Gallery";
import HotelInfo from "./components/HotelInfo";
import Map from "./components/Map";
import PageLoader from "./components/PageLoader";
import ReviewsList from "./components/ReviewsList";
import RoomsCarousel from "./components/RoomsCarousel";
import useGetHotel from "./hooks/useGetHotel";

const Hotel: FC = () => {
  const { id: paramsId } = useParams();

  const { hotel, isFetching } = useGetHotel(parseInt(paramsId ?? "-1"));

  const id = parseInt(paramsId ?? "-1");

  if (isFetching) return <PageLoader />;

  if (!hotel) return null;

  const { latitude, longitude, ...rest } = hotel;

  const position: LatLngExpression = [latitude, longitude];

  return (
    <Grid container justifyContent="center" sx={{ position: "relative" }}>
      <Grid item container py={5} px={{ xs: 3, md: 5 }} gap={3} maxWidth={1300}>
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

        <Grid item xs={12} sx={{ zIndex: 999 }}>
          <Typography variant="h5" pl={1.2} pb={1} fontWeight={500}>
            Rooms
          </Typography>
          <RoomsCarousel id={id} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hotel;
