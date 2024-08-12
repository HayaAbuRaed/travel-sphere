import { Hotel } from "src/components/HotelCard/types";
import { RecentlyVisitedResponse } from "./API/types";

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

export const getXAxisCategories = (slot: string) =>
  slot === "month"
    ? Array.from({ length: 12 }, (_, i) =>
        new Date(0, i).toLocaleString("en", { month: "short" })
      )
    : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
