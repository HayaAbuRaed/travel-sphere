import { LatLngExpression } from "leaflet";
import { HotelResponse, PhotoResponse, ReviewResponse } from "./API/types";

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

export interface RoomsCarouselProps extends IdInterface {}

export interface ImageBackDropProps {
  open: boolean;
  onClose: () => void;
  photo: PhotoResponse;
}
