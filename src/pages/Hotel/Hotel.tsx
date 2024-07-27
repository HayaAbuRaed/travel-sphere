import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";
import Gallery from "./components/Gallery";
import HotelInfo from "./components/HotelInfo";
import ReviewsList from "./components/ReviewsList";
import useGetHotel from "./hooks/useGetHotel";
import { LatLngExpression } from "leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { TileLayer } from "react-leaflet/TileLayer";
import "leaflet/dist/leaflet.css";
import "./components/map.css";

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

          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{
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
                <Typography variant="subtitle2">{rest.hotelName}</Typography>
              </Popup>
            </Marker>
          </MapContainer>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hotel;
