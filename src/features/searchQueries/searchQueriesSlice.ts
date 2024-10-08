import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_VALUES } from "./constants";
import { SearchQueriesState } from "./types";

const searchQueriesSlice = createSlice({
  name: "searchQueries",
  initialState: INITIAL_VALUES,
  reducers: {
    submitSearch: (
      state,
      action: PayloadAction<Omit<SearchQueriesState, "searchSubmitted">>
    ) => {
      return {
        ...state,
        ...action.payload,
        searchSubmitted: true,
      };
    },
    resetSearchQueries: () => {
      return { ...INITIAL_VALUES };
    },
    resetSearchSubmitted: (state) => {
      return { ...state, searchSubmitted: false };
    },
  },
});

export default searchQueriesSlice.reducer;

export const { submitSearch, resetSearchQueries, resetSearchSubmitted } =
  searchQueriesSlice.actions;
