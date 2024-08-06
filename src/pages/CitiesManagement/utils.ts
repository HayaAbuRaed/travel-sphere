import { City } from "./API/types";
import { FilterKey } from "./types";

export const createData = (id: number, name: string, description: string) => ({
  id,
  name,
  description,
});

export const getTableRows = (cities: City[]) => {
  return cities.map((city) => createData(city.id, city.name, city.description));
};

/**
 * Sorts an array of City objects based on the specified configuration.
 *
 * @param cities - The array of City objects to sort.
 * @param sortConfig - An optional object containing the key to sort by and the direction of sorting ('asc' or 'desc').
 *                     If no sortConfig is provided, the original array is returned.
 * @returns A new array of City objects sorted according to the provided sortConfig.
 */
export const sortCities = (
  cities: City[],
  sortConfig: { key: keyof City; direction: "asc" | "desc" } | null
): City[] => {
  if (!sortConfig) return cities;

  return [...cities].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });
};

/**
 * Filters an array of City objects based on a search string.
 *
 * @param cities - The array of City objects to filter.
 * @param filterKey - The key to filter by. If 'all', the filter is applied to all properties of the City object.
 *                   Otherwise, the filter is applied to the specified property.
 * @param filterValue - A string used to filter the City objects by their name. The filter is case-insensitive.
 * @returns A new array of City objects that match the filterValue.
 */
export const filterCities = (
  cities: City[],
  filterKey: FilterKey,
  filterValue: string
): City[] => {
  const ignoredCaseFilterValue = filterValue.toLowerCase();

  if (!filterValue.trim()) return cities;

  if (filterKey === "all") {
    return cities.filter(
      (city) =>
        city.name.toLowerCase().includes(ignoredCaseFilterValue) ||
        city.description.toLowerCase().includes(ignoredCaseFilterValue) ||
        city.id.toString().includes(ignoredCaseFilterValue)
    );
  }

  return cities.filter((city) =>
    typeof city[filterKey] === "string"
      ? city[filterKey].toLowerCase().includes(ignoredCaseFilterValue)
      : city[filterKey] === parseInt(filterValue)
  );
};
