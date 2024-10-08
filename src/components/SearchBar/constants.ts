import { addDays } from "date-fns";
import { FormikSearchPayload } from "src/types/search";

export const INITIAL_VALUES: FormikSearchPayload = {
  dateRange: {
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
  },
  adults: 2,
  children: 0,
  numberOfRooms: 1,
  city: "",
  starRate: undefined,
  sort: undefined,
};
