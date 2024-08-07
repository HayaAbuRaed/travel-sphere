import { LatLngExpression } from "leaflet";
import { ReactNode } from "react";
import { Hotel } from "./API/types";

export interface HotelData extends Omit<Hotel, "longitude" | "latitude"> {
  location: ReactNode;
}

export interface MapProps {
  position: LatLngExpression;
}

export interface FilterConfigState {
  key: keyof Hotel;
  value: string;
}
