import { selectSearchQueries } from "src/features/searchQueries";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { HOTEL_ROOMS_QUERY_KEY } from "../constants";
import { getHotelRooms } from "../API";

const useGetHotelRooms = (id: number) => {
  const dispatch = useAppDispatch();

  const {
    formValues: {
      dateRange: { startDate, endDate },
    },
  } = useAppSelector(selectSearchQueries);

  const {
    data: rooms,
    isFetching,
    error,
  } = useQuery({
    queryFn: () =>
      getHotelRooms({
        hotelId: id,
        checkInDate: startDate,
        checkOutDate: endDate,
      }),
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
