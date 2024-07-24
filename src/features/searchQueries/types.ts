import { FormikSearchPayload } from "src/types/search";

interface FormValues extends Omit<FormikSearchPayload, "dateRange"> {
  dateRange: {
    startDate: string;
    endDate: string;
  };
}

export interface SearchQueriesState {
  formValues: FormValues;
  searchSubmitted: boolean;
}
