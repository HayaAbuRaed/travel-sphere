import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getRecentlyVisited } from "../API";
import { RECENTLY_VISITED_QUERY_KEY } from "../constants";
import selectUser from "src/features/user/selectors";

const useGetRecentlyVisitedHotels = () => {
  const dispatch = useAppDispatch();

  const { userId } = useAppSelector(selectUser);

  const {
    data: recentHotels,
    isFetching,
    error,
  } = useQuery({
    queryFn: () => {
      console.log(userId);
      return getRecentlyVisited(userId);
    },
    queryKey: [RECENTLY_VISITED_QUERY_KEY, userId],
  });

  useEffect(() => {
    if (!error) return;
    dispatch(
      showErrorSnackbar({
        message: "Something went wrong.",
      })
    );
  }, [dispatch, error]);

  return { recentHotels, isFetching };
};

export default useGetRecentlyVisitedHotels;
