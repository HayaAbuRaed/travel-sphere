import { useFormik } from "formik";
import { selectSearchQueries, submitSearch } from "src/features/searchQueries";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { FormikSearchPayload } from "src/types/search";
import { deserializeDateRange, serializeDateRange } from "src/utils/search";
import validationSchema from "../schema";
import { useNavigate, useLocation } from "react-router-dom";

const useSearchForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { formValues } = useAppSelector(selectSearchQueries);
  const { dateRange } = formValues;

  const onSubmit = async (values: FormikSearchPayload) => {
    console.log("Date", Date());
    dispatch(
      submitSearch({
        formValues: {
          ...values,
          dateRange: serializeDateRange(values.dateRange),
        },
      })
    );
    pathname !== "/me/search" && navigate("search");
  };

  const formikProps = useFormik({
    initialValues: {
      ...formValues,
      dateRange: deserializeDateRange(dateRange),
    },
    validationSchema,
    onSubmit,
  });

  return { formikProps };
};

export default useSearchForm;
