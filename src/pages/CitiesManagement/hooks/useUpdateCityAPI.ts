import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  showErrorSnackbar,
  showSuccessSnackbar,
} from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";
import { updateCity as updateCityApi } from "../API";
import { CITIES_QUERY_KEY } from "../constants";
import { City } from "../API/types";

const useUpdateCityAPI = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const {
    mutate: updateCity,
    isPending,
    status,
  } = useMutation({
    mutationFn: updateCityApi,

    onSuccess: (updatedCity: City) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      queryClient.setQueryData([CITIES_QUERY_KEY], (oldData: any) => {
        if (!oldData || !oldData.pages) return oldData;

        const updatedPages = oldData.pages[0].map((city: City) => {
          if (city.id === updatedCity.id) return updatedCity;

          return city;
        });

        return { ...oldData, pages: updatedPages };
      });

      dispatch(
        showSuccessSnackbar({
          message: "City Updated Successfully!",
        })
      );
    },

    onError: () => {
      dispatch(
        showErrorSnackbar({
          message: "This city cannot be updated.",
        })
      );
    },
  });

  return { updateCity, isPending, status };
};

export default useUpdateCityAPI;
