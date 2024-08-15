import {
  mapRecentlyVisitedHotelToHotel,
  formatDisplayDate,
  getXAxisCategories,
} from "../utils";
import { RecentlyVisitedResponse } from "../API/types";

describe("Home/utils.ts", () => {
  describe("mapRecentlyVisitedHotelToHotel function", () => {
    it("should map a recently visited hotel to a hotel", () => {
      const recentHotel: RecentlyVisitedResponse = {
        hotelId: 1,
        hotelName: "Hotel 1",
        starRating: 4,
        visitDate: "2021-07-01T00:00:00.000Z",
        cityName: "New York",
        thumbnailUrl: "https://example.com/hotel1.jpg",
        priceLowerBound: 100,
        priceUpperBound: 200,
      };

      const result = mapRecentlyVisitedHotelToHotel(recentHotel);

      const expected = {
        hotelId: 1,
        hotelName: "Hotel 1",
        cityName: "New York",
        starRating: 4,
        photoUrl: "https://example.com/hotel1.jpg",
        priceLowerBound: 100,
        priceUpperBound: 200,
        title: "Hotel 1",
        visitDate: "2021-07-01T00:00:00.000Z",
      };

      expect(result).toEqual(expected);
    });
  });

  describe("formatDisplayDate function", () => {
    it("should format a date string", () => {
      const date = "2021-07-01T00:00:00.000Z";

      const result = formatDisplayDate(date);

      const expected = "Jul 1, 2021";

      expect(result).toEqual(expected);
    });
  });

  describe("getXAxisCategories function", () => {
    it("should return an array of month names", () => {
      const result = getXAxisCategories("month");

      const expected = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      expect(result).toEqual(expected);
    });

    it("should return an array of day names", () => {
      const result = getXAxisCategories("day");

      const expected = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      expect(result).toEqual(expected);
    });
  });
});
