import { useFormik } from "formik";
import { initialValues } from "../constants";
import { validationSchema } from "../schema";
import useAddRoomAPI from "./useAddRoomAPI";
import { CreateRoomRequest } from "../API/types";

const useAddRoomForm = () => {
  const { addRoom, isPending } = useAddRoomAPI();

  const handleSubmit = (values: CreateRoomRequest) => {
    addRoom({
      ...values,
      hotelId: 5,
    });
  };

  const formikProps = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return { formikProps, isAdding: isPending };
};

export default useAddRoomForm;
