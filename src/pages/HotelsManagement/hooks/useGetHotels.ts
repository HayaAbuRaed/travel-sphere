import { useInfiniteQuery } from "@tanstack/react-query";
import { getHotels } from "../API";
import { useAppDispatch } from "src/store/hooks";
import { useEffect } from "react";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { HOTELS_QUERY_KEY } from "../constants";
import { Hotel } from "../API/types";

const useGetHotels = (pageSize: number = 10) => {
  const dispatch = useAppDispatch();

  const {
    data,
    isFetching,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [HOTELS_QUERY_KEY],
    queryFn: ({ pageParam = 1 }) => getHotels(pageParam, pageSize),
    getNextPageParam: (lastPage: Hotel[], allPages) => {
      // If the number of hotels in the last page is less than pageSize, no more pages
      return lastPage.length < pageSize ? undefined : allPages.length + 1;
    },
    initialPageParam: 1,
  });

  useEffect(() => {
    if (error) {
      dispatch(
        showErrorSnackbar({
          message: "Something went wrong. Please try again later.",
        })
      );
    }
  }, [dispatch, error]);

  // Flatten the pages array to get the full list of hotels
  const hotels = data?.pages.flat() || [];

  return {
    hotels,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useGetHotels;
