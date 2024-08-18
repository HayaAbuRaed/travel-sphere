import axios from "src/API/axios";
import { FeaturedDealResponse } from "./types";

export const getFeaturedDeals = async () => {
  const response = await axios.get<FeaturedDealResponse[]>(
    "/home/featured-deals"
  );
  return response.data;
};
