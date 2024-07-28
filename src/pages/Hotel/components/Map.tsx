import { Typography } from "@mui/material";
import "leaflet/dist/leaflet.css";
import { FC } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { TileLayer } from "react-leaflet/TileLayer";
import { MapProps } from "../types";
import "./map.css";

const Map: FC<MapProps> = ({ position, label }) => {
  return (
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
        {label && (
          <Popup>
            <Typography variant="subtitle2">{label}</Typography>
          </Popup>
        )}
      </Marker>
    </MapContainer>
  );
};

export default Map;
