import { Hotel } from "src/components/HotelCard/types";
import { FeaturedDealResponse } from "../API/types";
import { mapDealToHotel } from "../utils";

describe("FeaturedDeals/utils.ts", () => {
  describe("mapDealToHotel function", () => {
    it("should map a deal to a hotel", () => {
      const deal: FeaturedDealResponse = {
        hotelId: 1,
        originalRoomPrice: 100,
        discount: 0,
        finalPrice: 100,
        cityName: "New York",
        hotelName: "Hotel 1",
        hotelStarRating: 4,
        title: "Room 1",
        description: "Room 1",
        roomPhotoUrl: "https://example.com/room1.jpg",
      };

      const result = mapDealToHotel(deal);

      const expected: Hotel = {
        hotelId: 1,
        hotelName: "Hotel 1",
        cityName: "New York",
        starRating: 4,
        discount: 0,
        photoUrl: "https://example.com/room1.jpg",
        description: "Room 1",
        title: "Room 1",
        originalRoomPrice: 100,
      };

      expect(result).toEqual(expected);
    });
  });
});
