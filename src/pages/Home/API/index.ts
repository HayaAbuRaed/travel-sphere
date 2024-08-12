import axios from "API/axios";
import { RecentlyVisitedResponse, TrendingDestinationsResponse } from "./types";

export const getRecentlyVisited = async (userId: string) => {
  const response = await axios.get<RecentlyVisitedResponse[]>(
    `/home/users/${userId}/recent-hotels`
  );
  return response.data;
};

export const getTrendingDestinations = async () => {
  const response = await axios.get<TrendingDestinationsResponse[]>(
    "/home/destinations/trending"
  );
  return response.data;
};
