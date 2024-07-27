import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";
import { getHotelReviews } from "../API";
import { HOTEL_REVIEWS_QUERY_KEY } from "../constants";

const useGetHotelReviews = (id: number) => {
  const dispatch = useAppDispatch();

  const {
    data: reviews,
    isFetching,
    error,
  } = useQuery({
    queryFn: () => getHotelReviews(id),
    queryKey: [HOTEL_REVIEWS_QUERY_KEY, id],
  });

  useEffect(() => {
    if (!error) return;
    dispatch(
      showErrorSnackbar({
        message: "Something went wrong!",
      })
    );
  }, [dispatch, error]);

  return { reviews, isFetching };
};

export default useGetHotelReviews;
