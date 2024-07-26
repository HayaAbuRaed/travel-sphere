import { addDays } from "date-fns";
import { SearchQueriesState } from "./types";
import { formatDate } from "src/utils/search";

export const INITIAL_VALUES: SearchQueriesState = {
  formValues: {
    dateRange: {
      startDate: formatDate(new Date()),
      endDate: formatDate(addDays(new Date(), 1)),
    },
    adults: 2,
    children: 0,
    numberOfRooms: 1,
    city: "",
    starRate: undefined,
    sort: undefined,
  },
  searchSubmitted: false,
};
