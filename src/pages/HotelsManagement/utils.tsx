import { LatLngExpression } from "leaflet";
import { Hotel } from "./API/types";
import Map from "./components/Map";
import { HotelData } from "./types";

export const getLocation = (latitude: number, longitude: number) => {
  if (latitude && longitude)
    return <Map position={[latitude, longitude] as LatLngExpression} />;

  return "Not Set";
};

export const mapHotelsToTableData = (hotels: Hotel[]): HotelData[] => {
  return hotels.map((hotel) => ({
    ...hotel,
    location: getLocation(hotel.latitude, hotel.longitude),
  }));
};

export const filterByKey = (
  hotels: Hotel[],
  key: keyof Hotel,
  value: string
) => {
  const trimmedValue = value.trim();

  if (trimmedValue === "") return hotels;

  return hotels.filter((room) => {
    if (typeof room[key as keyof Hotel] === "number")
      return room[key as keyof Hotel] === parseFloat(trimmedValue);

    return String(room[key as keyof Hotel])
      .toLowerCase()
      .includes(trimmedValue.toLowerCase());
  });
};
