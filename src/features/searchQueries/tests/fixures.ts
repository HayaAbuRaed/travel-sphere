import { SearchQueriesState } from "../types";

export const samplePayload: Omit<SearchQueriesState, "searchSubmitted"> = {
  formValues: {
    city: "New York",
    numberOfRooms: 2,
    adults: 2,
    children: 0,
    dateRange: {
      startDate: "2024-01-01",
      endDate: "2024-01-07",
    },
  },
};

export const sampleSearchState: SearchQueriesState = {
  formValues: {
    city: "Los Angeles",
    numberOfRooms: 1,
    adults: 1,
    children: 2,
    dateRange: {
      startDate: "2024-02-01",
      endDate: "2024-02-07",
    },
  },
  searchSubmitted: true,
};
