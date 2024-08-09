import { useFormik } from "formik";
import { initialValues } from "../constants";
import { validationSchema } from "../schema";
import useAddCityAPI from "./useAddCityAPI";
import { AddCityRequest } from "../API/types";

const useAddCityForm = () => {
  const { addCity, isPending } = useAddCityAPI();

  const handleSubmit = (values: AddCityRequest) => {
    addCity(values);
  };

  const formikProps = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return { formikProps, isAdding: isPending };
};

export default useAddCityForm;
