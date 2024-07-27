import { ReviewResponse } from "./API/types";

export interface IdInterface {
  id: number;
}

export interface GalleryProps extends IdInterface {}

export interface HotelInfoProps extends IdInterface {}

export interface ReviewProps extends IdInterface {}

export interface ReviewSegmentProps {
  review: ReviewResponse;
}

export interface GalleryPattern {
  rows: number;
  cols: number;
}
