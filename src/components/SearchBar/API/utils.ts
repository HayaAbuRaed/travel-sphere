import { SearchRequest } from "src/types/search";

export const getQueriesString = (payload: SearchRequest): string => {
  const queryNames = Object.keys(payload);

  let queryString = "";

  type QueryName = keyof SearchRequest;

  queryNames.forEach((queryName) => {
    const queryValue = payload[queryName as QueryName];

    if (queryValue) queryString += `${queryName}=${queryValue}&`;
  });

  const lastChar = queryString[queryString.length - 1];

  return lastChar === "&" ? queryString.slice(0, -1) : queryString;
};
