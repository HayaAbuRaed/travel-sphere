import { FC, PropsWithChildren, useEffect, useReducer } from "react";
import useSearchAPI from "src/components/SearchBar/hooks/useSearchAPI";
import { SORTING_OPTIONS } from "../constants";
import SearchResultsContext, { initialState } from "./SearchResultsContext";
import searchResultsReducer from "./searchResultsReducer";
import { SearchResultsActionTypes, SearchResultsState } from "./types";

const SearchResultsContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { searchResults: apiSearchResults, isFetching } = useSearchAPI();

  const [searchResults, dispatch] = useReducer(
    searchResultsReducer,
    initialState,
    () => {
      if (apiSearchResults) {
        return {
          originalSearchResults: apiSearchResults,
          searchResults: apiSearchResults,
          loading: isFetching,
          filters: initialState.filters,
        };
      }
      return initialState;
    }
  );

  const setSearchResultsContextState = (
    searchResultsState: Omit<SearchResultsState, "filters">
  ) => {
    dispatch({
      type: SearchResultsActionTypes.SET_SEARCH_RESULT_CONTEXT_STATE,
      payload: searchResultsState,
    });
  };

  const setPriceRangeFilter = (min: number, max: number) => {
    dispatch({
      type: SearchResultsActionTypes.SET_PRICE_RANGE_FILTER,
      payload: { min, max },
    });
  };

  const setStarRatingFilter = (starRating: number | null) => {
    dispatch({
      type: SearchResultsActionTypes.SET_STAR_RATING_FILTER,
      payload: starRating,
    });
  };

  const setAmenitiesFilter = (amenities: string[]) => {
    dispatch({
      type: SearchResultsActionTypes.SET_AMENITIES_FILTER,
      payload: amenities,
    });
  };

  const setSortByFilter = (sortBy: SORTING_OPTIONS | null) => {
    dispatch({
      type: SearchResultsActionTypes.SET_SORT_BY_FILTER,
      payload: sortBy,
    });
  };

  const onApplyFilters = () => {
    console.log("Dispatching APPLY_FILTERS action");
    dispatch({
      type: SearchResultsActionTypes.APPLY_FILTERS,
    });
  };

  const onClearFilters = () => {
    dispatch({
      type: SearchResultsActionTypes.CLEAR_FILTERS,
    });
  };

  useEffect(() => {
    apiSearchResults
      ? setSearchResultsContextState({
          originalSearchResults: apiSearchResults,
          searchResults: apiSearchResults,
          loading: isFetching,
        })
      : initialState;
  }, [apiSearchResults, isFetching]);

  return (
    <SearchResultsContext.Provider
      value={{
        state: searchResults,
        setPriceRangeFilter,
        setStarRatingFilter,
        setAmenitiesFilter,
        setSortByFilter,
        onApplyFilters,
        onClearFilters,
      }}
    >
      {children}
    </SearchResultsContext.Provider>
  );
};

export default SearchResultsContextProvider;
