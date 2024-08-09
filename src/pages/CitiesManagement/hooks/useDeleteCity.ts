import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  showErrorSnackbar,
  showSuccessSnackbar,
} from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";
import { deleteCity } from "../API";
import { CITIES_QUERY_KEY } from "../constants";
import { City } from "../API/types";

const useDeleteCity = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const { mutate: removeCity, isPending } = useMutation({
    mutationFn: deleteCity,

    onSuccess: (deletedCityId: number) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      queryClient.setQueryData([CITIES_QUERY_KEY], (oldData: any) => {
        if (!oldData || !oldData.pages) return oldData;

        const updatedPages = oldData.pages.map((page: City[]) =>
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

  return { removeCity, isPending };
};

export default useDeleteCity;
