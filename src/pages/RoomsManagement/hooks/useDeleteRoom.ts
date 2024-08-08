import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  showErrorSnackbar,
  showSuccessSnackbar,
} from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";
import { deleteRoom } from "../API";
import { ROOMS_QUERY_KEY } from "../constants";
import { RoomRow } from "../types";

const useDeleteRoom = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const { mutate: removeRoom, isPending } = useMutation({
    mutationFn: deleteRoom,

    onSuccess: (deletedCityId: number) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      queryClient.setQueryData([ROOMS_QUERY_KEY], (oldData: any) => {
        if (!oldData || !oldData.pages) return oldData;

        const updatedPages = oldData.pages.map((page: RoomRow[]) =>
          page.filter((city) => city.id !== deletedCityId)
        );

        return { ...oldData, pages: updatedPages };
      });

      dispatch(
        showSuccessSnackbar({
          message: "City Deleted Successfully!",
        })
      );
    },

    onError: () => {
      dispatch(
        showErrorSnackbar({
          message: "City cannot be deleted.",
        })
      );
    },
  });

  return { removeRoom, isPending };
};

export default useDeleteRoom;
