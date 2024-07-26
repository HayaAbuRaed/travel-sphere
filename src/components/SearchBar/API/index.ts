import axios from "src/API/axios";
import { getQueriesString } from "./utils";
import { SearchRequest, SearchResponse } from "src/types/search";

export const searchApi = async (payload: SearchRequest) => {
  const response = await axios.get<SearchResponse>(
    `/home/search?${getQueriesString(payload)}`
  );

  return response.data;
};
