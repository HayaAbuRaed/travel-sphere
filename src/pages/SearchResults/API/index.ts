import axios from "src/API/axios";
import { Amenity } from "src/types/search";
import { getQueriesString } from "./utils";
import { SearchRequest, SearchResponse } from "src/types/search";

export const getSearchPageAmenities = async () => {
  const response = await axios.get<Amenity[]>("/search-results/amenities");

  return response.data;
};

export const searchApi = async (payload: SearchRequest) => {
  const response = await axios.get<SearchResponse[]>(
    `/home/search?${getQueriesString(payload)}`
  );

  return response.data;
};
