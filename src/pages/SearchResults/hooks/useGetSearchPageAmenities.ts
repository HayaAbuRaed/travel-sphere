import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";
import { getSearchPageAmenities } from "../API";

const useGetSearchPageAmenities = () => {
  const dispatch = useAppDispatch();

  const {
    data: searchAmenities,
    isFetching,
    error,
  } = useQuery({
    queryFn: getSearchPageAmenities,
    queryKey: ["searchPageAmenities"],
  });

  useEffect(() => {
    if (!error) return;
    dispatch(
      showErrorSnackbar({
        message: "Something went wrong.",
      })
    );
  }, [dispatch, error]);

  return { searchAmenities, isFetching };
};

export default useGetSearchPageAmenities;
