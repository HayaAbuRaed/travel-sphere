import { useQuery } from "@tanstack/react-query";
import { getFeaturedDeals } from "../API";
import { useAppDispatch } from "src/store/hooks";
import { useEffect } from "react";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { FEATURED_DEALS_QUERY_KEY } from "../constants";

const useGetFeaturedDeals = () => {
  const dispatch = useAppDispatch();

  const {
    data: featuredDeals,
    isFetching,
    error,
  } = useQuery({
    queryFn: getFeaturedDeals,
    queryKey: [FEATURED_DEALS_QUERY_KEY],
  });

  useEffect(() => {
    if (!error) return;
    dispatch(
      showErrorSnackbar({
        message: "Something went wrong. Please try again later.",
      })
    );
  }, [dispatch, error]);

  return { featuredDeals, isFetching };
};

export default useGetFeaturedDeals;
