import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";
import { getHotel } from "../API";
import { HOTEL_QUERY_KEY } from "../constants";

const useGetHotel = (id: number) => {
  const dispatch = useAppDispatch();

  const {
    data: hotel,
    isFetching,
    error,
  } = useQuery({
    queryFn: () => getHotel(id),
    queryKey: [HOTEL_QUERY_KEY, id],
  });

  useEffect(() => {
    if (!error) return;
    dispatch(
      showErrorSnackbar({
        message: "Something went wrong.",
      })
    );
  }, [dispatch, error]);

  return { hotel, isFetching };
};

export default useGetHotel;
