import * as Yup from "yup";
import { CreateHotelRequest } from "./API/types";

export const validationSchema = Yup.object<CreateHotelRequest>({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  hotelType: Yup.number().required("Hotel type is required"),
  starRating: Yup.number().required("Star rating is required"),
  latitude: Yup.number().required("Latitude is required"),
  longitude: Yup.number().required("Longitude is required"),
});
