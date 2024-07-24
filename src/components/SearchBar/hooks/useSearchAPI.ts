import { useQuery } from "@tanstack/react-query";
import { searchApi } from "../API";
import { SEARCH_QUERY_KEY } from "../constants";
import { SearchRequest } from "../API/types";
import { useAppDispatch } from "src/store/hooks";
import { useEffect } from "react";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";

const useSearchAPI = (query: SearchRequest) => {
  const dispatch = useAppDispatch();

  const {
    data: searchResults,
    isFetching,
    error,
  } = useQuery({
    queryFn: () => searchApi(query),
    queryKey: [SEARCH_QUERY_KEY],
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
