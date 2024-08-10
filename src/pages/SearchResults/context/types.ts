import { SearchResponse } from "src/types/search";
import { SORTING_OPTIONS } from "../constants";

export interface SearchResultsState {
  originalSearchResults: SearchResponse[];
  searchResults: SearchResponse[] | undefined;
  loading: boolean;
  filters: Filter;
}

export interface Filter {
  priceRange: { min: number; max: number };
  starRating: number | null;
  amenities: string[];
  sortBy: SORTING_OPTIONS | null;
}

export enum SearchResultsActionTypes {
  SET_SEARCH_RESULT_CONTEXT_STATE = "SET_SEARCH_RESULT_CONTEXT_STATE",
  SET_PRICE_RANGE_FILTER = "SET_PRICE_RANGE_FILTER",
  SET_STAR_RATING_FILTER = "SET_STAR_RATING_FILTER",
  SET_AMENITIES_FILTER = "SET_AMENITIES_FILTER",
  SET_SORT_BY_FILTER = "SET_SORT_BY_FILTER",
  APPLY_FILTERS = "APPLY_FILTERS",
  CLEAR_FILTERS = "CLEAR_FILTERS",
}

export type SearchResultsAction =
  | {
      type: SearchResultsActionTypes.SET_SEARCH_RESULT_CONTEXT_STATE;
      payload: Omit<SearchResultsState, "filters">;
    }
  | {
      type: SearchResultsActionTypes.SET_PRICE_RANGE_FILTER;
      payload: { min: number; max: number };
    }
  | {
      type: SearchResultsActionTypes.SET_STAR_RATING_FILTER;
      payload: number | null;
    }
  | {
      type: SearchResultsActionTypes.SET_AMENITIES_FILTER;
      payload: string[];
    }
  | {
      type: SearchResultsActionTypes.SET_SORT_BY_FILTER;
      payload: SORTING_OPTIONS | null;
    }
  | {
      type: SearchResultsActionTypes.APPLY_FILTERS;
    }
  | {
      type: SearchResultsActionTypes.CLEAR_FILTERS;
    };

export interface SearchResultsContextType {
  state: SearchResultsState;
  setPriceRangeFilter: (min: number, max: number) => void;
  setStarRatingFilter: (starRating: number | null) => void;
  setAmenitiesFilter: (amenities: string[]) => void;
  setSortByFilter: (sortBy: SORTING_OPTIONS | null) => void;
  onApplyFilters: () => void;
  onClearFilters: () => void;
}
