import { useQuery } from "@tanstack/react-query";
import { getCitiesData } from "../API";
import { useAppDispatch } from "src/store/hooks";
import { useEffect } from "react";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { CITIES_QUERY_KEY } from "../constants";

const useGetCities = () => {
  const dispatch = useAppDispatch();

  const {
    data: cities,
    isFetching,
    error,
  } = useQuery({
    queryFn: getCitiesData,
    queryKey: [CITIES_QUERY_KEY],
  });

  useEffect(() => {
    if (!error) return;
    dispatch(
      showErrorSnackbar({
        message: "Something went wrong. Please try again later.",
      })
    );
  }, [dispatch, error]);

  return { cities, isFetching };
};

export default useGetCities;
