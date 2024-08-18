import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  showErrorSnackbar,
  showSuccessSnackbar,
} from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";
import { addCity as addCityApi } from "../API";
import { CITIES_QUERY_KEY } from "../constants";
import { City } from "../API/types";

const useAddCityAPI = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const {
    mutate: addCity,
    isPending,
    status,
  } = useMutation({
    mutationFn: addCityApi,

    onSuccess: (city: City) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      queryClient.setQueryData([CITIES_QUERY_KEY], (oldData: any) => {
        if (!oldData || !oldData.pages) return oldData;

        const updatedPages = oldData.pages.map((page: City[]) => [
          city,
          ...page,
        ]);

        return { ...oldData, pages: updatedPages };
      });

      dispatch(
        showSuccessSnackbar({
          message: "City Added Successfully!",
        })
      );
    },

    onError: () => {
      dispatch(
        showErrorSnackbar({
          message: "Something went wrong while adding city.",
        })
      );
    },
  });

  return { addCity, isPending, status };
};

export default useAddCityAPI;
