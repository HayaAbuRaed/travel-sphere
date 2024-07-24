import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useEffect } from "react";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";
import { searchApi } from "../API";
import { INITIAL_VALUES, SEARCH_QUERY_KEY } from "../constants";
import { FormikSearchPayload } from "../types";
import { formatDate } from "./../utils";

const useSearchForm = () => {
  const dispatch = useAppDispatch();

  const {
    data: searchResults,
    isFetching,
    error,
  } = useQuery({
    queryFn: () => onSubmit,
    queryKey: [SEARCH_QUERY_KEY],
  });

  const onSubmit = async (values: FormikSearchPayload) => {
    await searchApi({
      ...values,
      checkInDate: formatDate(values.dateRange.startDate),
      checkOutDate: formatDate(values.dateRange.endDate),
    });
  };

  const formikProps = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit,
  });

  useEffect(() => {
    if (!error) return;

    dispatch(
      showErrorSnackbar({
        message: error.message,
      })
    );
  }, [error, dispatch]);

  return { formikProps, searchResults, isFetching };
};

export default useSearchForm;
