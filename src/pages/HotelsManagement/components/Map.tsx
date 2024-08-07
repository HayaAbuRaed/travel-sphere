import "leaflet/dist/leaflet.css";
import { FC } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker } from "react-leaflet/Marker";
import { TileLayer } from "react-leaflet/TileLayer";
import { MapProps } from "../types";

const Map: FC<MapProps> = ({ position }) => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        borderRadius: 4,
        border: "1px solid #ccc",
        width: "100%",
        height: 200,
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} />
    </MapContainer>
  );
};

export default Map;
