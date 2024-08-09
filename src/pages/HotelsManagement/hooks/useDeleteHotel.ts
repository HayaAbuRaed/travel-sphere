import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  showErrorSnackbar,
  showSuccessSnackbar,
} from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";
import { deleteHotel } from "../API";
import { HOTELS_QUERY_KEY } from "../constants";

const useDeleteHotel = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const { mutate: removeHotel, isPending } = useMutation({
    mutationFn: deleteHotel,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [HOTELS_QUERY_KEY],
      });

      dispatch(
        showSuccessSnackbar({
          message: "Hotel Deleted Successfully!",
        })
      );
    },

    onError: () => {
      dispatch(
        showErrorSnackbar({
          message: "Can't delete this hotel.",
        })
      );
    },
  });

  return { removeHotel, isPending };
};

export default useDeleteHotel;
