import { CreateRoomRequest } from "./API/types";
import * as Yup from "yup";

export const validationSchema = Yup.object<CreateRoomRequest>({
  hotelId: Yup.number().required("Hotel is required"),
  roomNumber: Yup.string().required("Room number is required"),
  cost: Yup.number().required("Cost is required"),
});
