import { SortConfigState } from "./types";

/**
 * Sorts the data based on the sort configuration.
 *
 * @param entities - The entities to sort.
 * @param sortConfig - The sort configuration.
 * @returns The sorted entities based on the sort configuration.
 */
export const sortData = <T>(
  entities: T[],
  sortConfig: SortConfigState<T> | null
): T[] => {
  if (!sortConfig) return entities;

  return [...entities].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });
};
