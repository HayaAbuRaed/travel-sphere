import { useFormik } from "formik";
import { City, UpdateCityRequest } from "../API/types";
import { validationSchema } from "../schema";
import useUpdateCityAPI from "./useUpdateCityAPI";

const useUpdateCityForm = (city: City) => {
  const { updateCity, isPending, status } = useUpdateCityAPI();

  const handleSubmit = (values: UpdateCityRequest) => {
    updateCity(values);
  };

  const formikProps = useFormik({
    initialValues: city,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return { formikProps, isUpdating: isPending, updateStatus: status };
};

export default useUpdateCityForm;
