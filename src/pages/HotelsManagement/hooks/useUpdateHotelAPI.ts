import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  showErrorSnackbar,
  showSuccessSnackbar,
} from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";
import { updateHotel as updateHotelApi } from "../API";
import { HOTELS_QUERY_KEY } from "../constants";

const useUpdateHotelAPI = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const {
    mutateAsync: updateHotel,
    isPending,
    status,
  } = useMutation({
    mutationFn: updateHotelApi,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [HOTELS_QUERY_KEY],
      });

      dispatch(
        showSuccessSnackbar({
          message: "Hotel Updated Successfully!",
        })
      );
    },

    onError: () => {
      dispatch(
        showErrorSnackbar({
          message: "Something went wrong while updating hotel.",
        })
      );
    },
  });

  return { updateHotel, isPending, status };
};

export default useUpdateHotelAPI;
