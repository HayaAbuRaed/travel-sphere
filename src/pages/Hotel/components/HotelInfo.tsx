import { Grid, Rating, Stack, Typography } from "@mui/material";
import { LatLngExpression } from "leaflet";
import { FC } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { TileLayer } from "react-leaflet/TileLayer";
import useGetHotel from "../hooks/useGetHotel";
import { HotelInfoProps } from "../types";
import ReviewsList from "./ReviewsList";
import "leaflet/dist/leaflet.css";
import "./map.css";

const HotelInfo: FC<HotelInfoProps> = ({ id }) => {
  const { hotel, isFetching } = useGetHotel(id);

  if (isFetching) return <div>Loading...</div>;

  if (!hotel) return null;

  const { hotelName, starRating, description, latitude, longitude } = hotel;

  const position: LatLngExpression = [latitude, longitude];

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

      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          width: "100%",
          height: 300,
          borderRadius: 4,
          border: "1px solid #ccc",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <Typography variant="subtitle2">{hotelName}</Typography>
          </Popup>
        </Marker>
      </MapContainer>
    </Grid>
  );
};

export default HotelInfo;
