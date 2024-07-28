import { initialState } from "./SearchResultsContext";
import {
  SearchResultsAction,
  SearchResultsActionTypes,
  SearchResultsState,
} from "./types";

const searchResultsReducer = (
  state: SearchResultsState,
  action: SearchResultsAction
): SearchResultsState => {
  switch (action.type) {
    case SearchResultsActionTypes.SET_SEARCH_RESULT_CONTEXT_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case SearchResultsActionTypes.SET_PRICE_RANGE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          priceRange: action.payload,
        },
      };
    case SearchResultsActionTypes.SET_STAR_RATING_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          starRating: action.payload,
        },
      };
    case SearchResultsActionTypes.SET_AMENITIES_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          amenities: action.payload,
        },
      };

    case SearchResultsActionTypes.SET_SORT_BY_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          sortBy: action.payload,
        },
      };

    case SearchResultsActionTypes.APPLY_FILTERS: {
      const { priceRange, starRating, amenities, sortBy } = state.filters;

      const filteredList = state.originalSearchResults.filter((result) => {
        const priceInRange =
          result.roomPrice >= priceRange.min &&
          result.roomPrice <= priceRange.max;

        const starRatingMatch =
          state.filters.starRating === null || result.starRating === starRating;

        const amenitiesMatch =
          amenities.length === 0 ||
          amenities.every((amenity) =>
            result.amenities.some(
              (resultAmenity) => resultAmenity.name === amenity
            )
          );

        return priceInRange && starRatingMatch && amenitiesMatch;
      });

      if (sortBy === "price") {
        filteredList.sort((a, b) => a.roomPrice - b.roomPrice);
      } else if (sortBy === "rating") {
        filteredList.sort((a, b) => b.starRating - a.starRating);
      }

      return {
        ...state,
        searchResults: filteredList,
      };
    }

    case SearchResultsActionTypes.CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...initialState.filters,
        },
        searchResults: state.originalSearchResults,
      };

    default:
      return state;
  }
};

export default searchResultsReducer;
