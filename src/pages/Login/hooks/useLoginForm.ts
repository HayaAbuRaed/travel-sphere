import { useFormik } from "formik";
import { INITIAL_VALUES } from "../constants";
import { LoginFormPayload } from "../types";
import validationSchema from "./../schema";
import useLoginAPI from "./useLoginAPI";

const useLoginForm = () => {
  const { logUserIn } = useLoginAPI();

  const submitForm = (values: LoginFormPayload) => {
    return logUserIn(values);
  };

  const formikProps = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: submitForm,
  });

  return formikProps;
};

export default useLoginForm;
