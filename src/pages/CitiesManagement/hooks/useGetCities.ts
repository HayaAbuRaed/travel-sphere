import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";
import { getCitiesData } from "../API";
import { CITIES_QUERY_KEY } from "../constants";

const useGetCities = (pageSize: number = 10) => {
  const dispatch = useAppDispatch();

  const {
    data,
    isFetching,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryFn: () => getCitiesData(1, pageSize),
    queryKey: [CITIES_QUERY_KEY],
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length < pageSize ? undefined : allPages.length + 1;
    },
    initialPageParam: 1,
  });

  useEffect(() => {
    if (!error) return;
    dispatch(
      showErrorSnackbar({
        message: "Something went wrong. Please try again later.",
      })
    );
  }, [dispatch, error]);

  const cities = data?.pages.flat() || [];

  return { cities, isFetching, fetchNextPage, isFetchingNextPage, hasNextPage };
};

export default useGetCities;
