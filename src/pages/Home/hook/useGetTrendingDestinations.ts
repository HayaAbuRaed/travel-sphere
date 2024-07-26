import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";
import { getTrendingDestinations } from "../API";
import { TRENDING_DESTINATIONS_QUERY_KEY } from "../constants";

const useGetTrendingDestinations = () => {
  const dispatch = useAppDispatch();

  const {
    data: trendingDestinations,
    isFetching,
    error,
  } = useQuery({
    queryFn: getTrendingDestinations,
    queryKey: [TRENDING_DESTINATIONS_QUERY_KEY],
  });

  useEffect(() => {
    if (!error) return;
    dispatch(
      showErrorSnackbar({
        message: "Something went wrong.",
      })
    );
  }, [dispatch, error]);

  return { trendingDestinations, isFetching };
};

export default useGetTrendingDestinations;
