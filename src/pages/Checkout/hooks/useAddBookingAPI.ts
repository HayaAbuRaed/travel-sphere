import { useMutation } from "@tanstack/react-query";
import { addBooking } from "../API";
import { useAppDispatch } from "src/store/hooks";
import {
  showErrorSnackbar,
  showSuccessSnackbar,
} from "src/features/snackbar/snackbarSlice";

const useAddBookingAPI = () => {
  const dispatch = useAppDispatch();
  const { mutateAsync: addNewBooking } = useMutation({
    mutationFn: addBooking,
    onSuccess: () => {
      dispatch(showSuccessSnackbar({ message: "Booking added successfully" }));
    },
    onError: () => {
      dispatch(showErrorSnackbar({ message: "Failed to add booking" }));
    },
  });
  return { addNewBooking };
};

export default useAddBookingAPI;
