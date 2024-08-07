import { useQuery } from "@tanstack/react-query";
import { getHotels } from "../API";
import { useAppDispatch } from "src/store/hooks";
import { useEffect } from "react";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { HOTELS_QUERY_KEY } from "../constants";

const useGetHotels = () => {
  const dispatch = useAppDispatch();

  const {
    data: hotels,
    isFetching,
    error,
  } = useQuery({
    queryFn: getHotels,
    queryKey: [HOTELS_QUERY_KEY],
  });

  useEffect(() => {
    if (!error) return;
    dispatch(
      showErrorSnackbar({
        message: "Something went wrong. Please try again later.",
      })
    );
  }, [dispatch, error]);

  return { hotels, isFetching };
};

export default useGetHotels;
