import { Hotel } from "src/components/HotelCard/types";
import { SearchResponse } from "src/types/search";

export const mapSearchResultToHotel = (searchResult: SearchResponse): Hotel => {
  const { roomPhotoUrl, roomPrice, ...rest } = searchResult;

  return {
    ...rest,
    photoUrl: roomPhotoUrl,
    originalRoomPrice: roomPrice,
    title: rest.hotelName,
  };
};
