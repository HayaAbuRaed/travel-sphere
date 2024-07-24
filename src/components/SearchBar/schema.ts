import { FormikSearchPayload } from "src/types/search";
import * as Yub from "yup";

const validationSchema = Yub.object<FormikSearchPayload>().shape({
  dateRange: Yub.object().shape({
    startDate: Yub.date()
      .min(new Date(), "Check-in date can't be in the past")
      .required("Check-in date is required"),
    endDate: Yub.date()
      .min(new Date(), "Check-out date can't be in the past")
      .required("Check-out date is required"),
  }),
  adults: Yub.number().min(1, "At least one adult is required"),
  numberOfRooms: Yub.number().min(1, "At least one room is required"),
});

export default validationSchema;
