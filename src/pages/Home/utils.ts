import { Hotel } from "src/components/HotelCard/types";
import { FeaturedDealResponse } from "./API/types";

export const mapDealToHotel = (deal: FeaturedDealResponse): Hotel => {
  const { roomPhotoUrl, hotelStarRating, ...rest } = deal;

  return {
    ...rest,
    photoUrl: roomPhotoUrl,
    starRating: hotelStarRating,
  };
};
