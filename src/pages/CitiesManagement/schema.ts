import * as Yup from "yup";
import { AddCityRequest, UpdateCityRequest } from "./API/types";

export const validationSchema = Yup.object<
  AddCityRequest | UpdateCityRequest
>().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
});
