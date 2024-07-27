import { LatLngExpression } from "leaflet";
import { HotelResponse, ReviewResponse } from "./API/types";

export interface IdInterface {
  id: number;
}

export interface GalleryProps extends IdInterface {}

export interface HotelInfoProps {
  hotel: Omit<HotelResponse, "latitude" | "longitude">;
}

export interface ReviewProps extends IdInterface {}

export interface ReviewSegmentProps {
  review: ReviewResponse;
}

export interface MapProps {
  position: LatLngExpression;
  label?: string;
}

export interface GalleryPattern {
  rows: number;
  cols: number;
}
