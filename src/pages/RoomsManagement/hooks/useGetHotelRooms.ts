import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";
import { getHotelRooms } from "../API";
import { HOTEL_ROOMS_QUERY_KEY } from "../constants";

const useGetHotelRooms = (id: number = 5) => {
  const dispatch = useAppDispatch();

  const {
    data: rooms,
    isFetching,
    error,
  } = useQuery({
    queryFn: () => getHotelRooms(id),
    queryKey: [HOTEL_ROOMS_QUERY_KEY, id],
  });

  useEffect(() => {
    if (!error) return;
    dispatch(
      showErrorSnackbar({
        message: "Something went wrong!",
      })
    );
  }, [dispatch, error]);

  return { rooms, isFetching };
};

export default useGetHotelRooms;
