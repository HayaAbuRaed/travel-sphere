import searchQueriesReducer, {
  submitSearch,
  resetSearchQueries,
  resetSearchSubmitted,
} from "../searchQueriesSlice";
import { INITIAL_VALUES } from "../constants";
import { SearchQueriesState } from "../types";
import { samplePayload, sampleSearchState } from "./fixures";

describe("searchQueriesSlice", () => {
  it("should return the initial state", () => {
    expect(searchQueriesReducer(undefined, { type: "unknown" })).toEqual(
      INITIAL_VALUES
    );
  });

  it("should handle submitSearch", () => {
    const previousState: SearchQueriesState = INITIAL_VALUES;

    const expectedState: SearchQueriesState = {
      ...samplePayload,
      searchSubmitted: true,
    };

    expect(
      searchQueriesReducer(previousState, submitSearch(samplePayload))
    ).toEqual(expectedState);
  });

  it("should handle resetSearchQueries", () => {
    expect(
      searchQueriesReducer(sampleSearchState, resetSearchQueries())
    ).toEqual(INITIAL_VALUES);
  });

  it("should handle resetSearchSubmitted", () => {
    const previousState: SearchQueriesState = {
      formValues: {
        city: "Chicago",
        numberOfRooms: 3,
        adults: 4,
        children: 1,
        dateRange: {
          startDate: "2024-03-01",
          endDate: "2024-03-07",
        },
      },
      searchSubmitted: true,
    };

    const expectedState: SearchQueriesState = {
      formValues: {
        city: "Chicago",
        numberOfRooms: 3,
        adults: 4,
        children: 1,
        dateRange: {
          startDate: "2024-03-01",
          endDate: "2024-03-07",
        },
      },
      searchSubmitted: false,
    };

    expect(searchQueriesReducer(previousState, resetSearchSubmitted())).toEqual(
      expectedState
    );
  });
});
