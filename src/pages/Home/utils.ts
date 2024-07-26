import { Hotel } from "src/components/HotelCard/types";
import { FeaturedDealResponse, RecentlyVisitedResponse } from "./API/types";

export const mapDealToHotel = (deal: FeaturedDealResponse): Hotel => {
  const { roomPhotoUrl, hotelStarRating, ...rest } = deal;

  return {
    ...rest,
    photoUrl: roomPhotoUrl,
    starRating: hotelStarRating,
  };
};

export const mapRecentlyVisitedHotelToHotel = (
  recentHotel: RecentlyVisitedResponse
): Hotel => {
  const { thumbnailUrl, ...rest } = recentHotel;

  return {
    ...rest,
    title: rest.hotelName,
    photoUrl: thumbnailUrl,
  };
};

export const formatDisplayDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
