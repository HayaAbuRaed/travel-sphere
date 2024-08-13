import { addDays } from "date-fns";
import { FormikSearchPayload } from "src/types/search";

export const SEARCH_QUERY_KEY = "search";

export const INITIAL_VALUES: FormikSearchPayload = {
  dateRange: {
    // startDate: new Date(),
    startDate: addDays(new Date(), 1),
    endDate: addDays(new Date(), 5),
  },
  adults: 2,
  children: 0,
  numberOfRooms: 1,
  city: "",
  starRate: undefined,
  sort: undefined,
};
