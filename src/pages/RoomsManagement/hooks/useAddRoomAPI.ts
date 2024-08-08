import { useMutation } from "@tanstack/react-query";
import {
  showErrorSnackbar,
  showSuccessSnackbar,
} from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";
import { addRoom as addRoomApi } from "../API";

const useAddRoomAPI = () => {
  const dispatch = useAppDispatch();

  const { mutate: addRoom, isPending } = useMutation({
    mutationFn: addRoomApi,

    onSuccess: () => {
      dispatch(
        showSuccessSnackbar({
          message: "Room Added Successfully!",
        })
      );
    },

    onError: () => {
      dispatch(
        showErrorSnackbar({
          message: "Something went wrong while adding room.",
        })
      );
    },
  });

  return { addRoom, isPending };
};

export default useAddRoomAPI;
