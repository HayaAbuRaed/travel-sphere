import { SortConfigState } from "./types";

/**
 * Sorts an array of City objects based on the specified configuration.
 *
 * @param cities - The array of City objects to sort.
 * @param sortConfig - An optional object containing the key to sort by and the direction of sorting ('asc' or 'desc').
 *                     If no sortConfig is provided, the original array is returned.
 * @returns A new array of City objects sorted according to the provided sortConfig.
 */
export const sortData = <T>(
  cities: T[],
  sortConfig: SortConfigState<T> | null
): T[] => {
  if (!sortConfig) return cities;

  return [...cities].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });
};
