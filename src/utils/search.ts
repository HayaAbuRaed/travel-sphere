import { DateRange } from "src/types/search";

/**
 *
 * @description - Format date to be used in the API request (e.g 2021-07-24)
 * @param date - Date object
 * @returns string - date string in the format of YYYY-MM-DD
 */
export const formatDate = (date: Date): string =>
  date.toLocaleDateString("en-CA");

/**
   *
   * @description - Format date to display on screen (e.g Wed, Jul 24)
   * @param date - Date object
   * @returns string - date string in the format of Day, Month Day
  
   */
export const formatDisplayDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

export const serializeDateRange = (dateRange: DateRange) => {
  const { startDate, endDate } = dateRange;
  return {
    startDate: startDate.toLocaleString(),
    endDate: endDate.toLocaleString(),
  };
};

export const deserializeDateRange = (dateRange: {
  startDate: string;
  endDate: string;
}) => {
  return {
    startDate: new Date(dateRange.startDate),
    endDate: new Date(dateRange.endDate),
  };
};
