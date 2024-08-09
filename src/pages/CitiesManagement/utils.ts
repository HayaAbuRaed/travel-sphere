import { City } from "./API/types";
import { FilterKey } from "./types";

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
