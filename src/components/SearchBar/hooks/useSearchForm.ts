import { useFormik } from "formik";
import { selectSearchQueries, submitSearch } from "src/features/searchQueries";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { FormikSearchPayload } from "src/types/search";
import { deserializeDateRange, serializeDateRange } from "src/utils/search";
import validationSchema from "../schema";

const useSearchForm = () => {
  const dispatch = useAppDispatch();

  const { formValues } = useAppSelector(selectSearchQueries);
  const { dateRange } = formValues;

  const onSubmit = async (values: FormikSearchPayload) => {
    dispatch(
      submitSearch({
        formValues: {
          ...values,
          dateRange: serializeDateRange(values.dateRange),
        },
      })
    );
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
