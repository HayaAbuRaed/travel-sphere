import axios from "src/API/axios";
import { SearchRequest, SearchResponse } from "./types";
import { getQueriesString } from "./utils";

export const searchApi = async (payload: SearchRequest) => {
  const response = await axios.get<SearchResponse>(
    `/home/search?${getQueriesString(payload)}`
  );

  return response.data;
};
