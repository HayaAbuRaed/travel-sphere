import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { selectSearchQueries } from "src/features/searchQueries";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { searchApi } from "../API";
import { SEARCH_QUERY_KEY } from "../constants";

const useSearchAPI = () => {
  const dispatch = useAppDispatch();

  const { formValues, searchSubmitted } = useAppSelector(selectSearchQueries);

  const { dateRange, ...otherFormValues } = formValues;
  const { startDate, endDate } = dateRange;

  const {
    data: searchResults,
    isFetching,
    error,
  } = useQuery({
    queryFn: () =>
      searchApi({
        ...otherFormValues,
        checkInDate: startDate,
        checkOutDate: endDate,
      }),
    queryKey: [SEARCH_QUERY_KEY],
    enabled: searchSubmitted,
  });

  useEffect(() => {
    if (!error) return;

    dispatch(
      showErrorSnackbar({
        message: error.message,
      })
    );
  }, [error, dispatch]);

  return { searchResults, isFetching };
};

export default useSearchAPI;
