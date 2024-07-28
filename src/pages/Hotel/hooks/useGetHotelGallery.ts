import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";
import { getHotelGallery } from "../API";
import { HOTEL_GALLERY_QUERY_KEY } from "../constants";

const useGetHotelGallery = (id: number) => {
  const dispatch = useAppDispatch();

  const {
    data: gallery,
    isFetching,
    error,
  } = useQuery({
    queryFn: () => getHotelGallery(id),
    queryKey: [HOTEL_GALLERY_QUERY_KEY, id],
  });

  useEffect(() => {
    if (!error) return;
    dispatch(
      showErrorSnackbar({
        message: "Something went wrong!",
      })
    );
  }, [dispatch, error]);

  return { gallery, isFetching };
};

export default useGetHotelGallery;
