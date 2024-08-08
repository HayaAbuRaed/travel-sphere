import * as Yup from "yup";
import { AddCityRequest } from "./API/types";

export const validationSchema = Yup.object<AddCityRequest>({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
});
