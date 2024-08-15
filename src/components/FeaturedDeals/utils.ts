import { Hotel } from "src/components/HotelCard/types";
import { FeaturedDealResponse } from "./API/types";

export const mapDealToHotel = (deal: FeaturedDealResponse): Hotel => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { roomPhotoUrl, hotelStarRating, finalPrice, ...rest } = deal;

  return {
    ...rest,
    photoUrl: roomPhotoUrl,
    starRating: hotelStarRating,
  };
};
