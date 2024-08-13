import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  showErrorSnackbar,
  showSuccessSnackbar,
} from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";
import { addHotel as addHotelApi } from "../API";
import { HOTELS_QUERY_KEY } from "../constants";
import { HotelData } from "../types";

const useAddHotelAPI = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const {
    mutateAsync: addHotel,
    isPending,
    status,
  } = useMutation({
    mutationFn: addHotelApi,

    onSuccess: (hotel: HotelData) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      queryClient.setQueryData([HOTELS_QUERY_KEY], (oldData: any) => {
        if (!oldData || !oldData.pages) return oldData;

        const updatedPages = oldData.pages.map((page: HotelData[]) => [
          hotel,
          ...page,
        ]);

        return { ...oldData, pages: updatedPages };
      });

      dispatch(
        showSuccessSnackbar({
          message: "Hotel Added Successfully!",
        })
      );
    },

    onError: () => {
      dispatch(
        showErrorSnackbar({
          message: "Something went wrong while adding hotel.",
        })
      );
    },
  });

  return { addHotel, isPending, status };
};

export default useAddHotelAPI;
