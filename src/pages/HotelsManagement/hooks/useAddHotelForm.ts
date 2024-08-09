import { useFormik } from "formik";
import { initialValues } from "../constants";
import { validationSchema } from "../schema";
import useAddCityAPI from "./useAddHotelAPI";
import { CreateHotelRequest } from "../API/types";

const useAddCityForm = () => {
  const { addHotel, isPending, status } = useAddCityAPI();

  const handleSubmit = (values: CreateHotelRequest) => {
    addHotel(values);
  };

  const formikProps = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return { formikProps, isAdding: isPending, addStatus: status };
};

export default useAddCityForm;
