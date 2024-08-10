import { createContext } from "react";
import { PRICE_RANGE_INITIAL_VALUES } from "../constants";
import { SearchResultsContextType, SearchResultsState } from "./types";

export const initialState: SearchResultsState = {
  originalSearchResults: [],
  searchResults: [],
  loading: false,
  filters: {
    priceRange: PRICE_RANGE_INITIAL_VALUES,
    starRating: null,
    amenities: [],
    sortBy: null,
  },
};

const SearchResultsContext = createContext<SearchResultsContextType>({
  state: initialState,
  setPriceRangeFilter: () => {},
  setStarRatingFilter: () => {},
  setAmenitiesFilter: () => {},
  setSortByFilter: () => {},
  onApplyFilters: () => {},
  onClearFilters: () => {},
});

export default SearchResultsContext;
