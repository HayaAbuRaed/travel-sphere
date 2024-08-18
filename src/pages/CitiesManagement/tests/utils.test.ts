import { filterCities } from "../utils";

describe("CitiesManagement/utils.ts", () => {
  describe("filterCities function", () => {
    it("should filter cities by all keys", () => {
      const cities = [
        { id: 1, name: "New York", description: "City in New York" },
        { id: 2, name: "Los Angeles", description: "City in California" },
        { id: 3, name: "Chicago", description: "City in Illinois" },
      ];

      const result = filterCities(cities, "all", "new");

      const expected = [
        { id: 1, name: "New York", description: "City in New York" },
      ];

      expect(result).toEqual(expected);
    });

    it("should filter cities by name", () => {
      const cities = [
        { id: 1, name: "New York", description: "City in New York" },
        { id: 2, name: "Los Angeles", description: "City in California" },
        { id: 3, name: "Chicago", description: "City in Illinois" },
      ];

      const result = filterCities(cities, "name", "new");

      const expected = [
        { id: 1, name: "New York", description: "City in New York" },
      ];

      expect(result).toEqual(expected);
    });

    it("should filter cities by description", () => {
      const cities = [
        { id: 1, name: "New York", description: "City in New York" },
        { id: 2, name: "Los Angeles", description: "City in California" },
        { id: 3, name: "Chicago", description: "City in Illinois" },
      ];

      const result = filterCities(cities, "description", "california");

      const expected = [
        { id: 2, name: "Los Angeles", description: "City in California" },
      ];

      expect(result).toEqual(expected);
    });

    it("should filter cities by id", () => {
      const cities = [
        { id: 1, name: "New York", description: "City in New York" },
        { id: 2, name: "Los Angeles", description: "City in California" },
        { id: 3, name: "Chicago", description: "City in Illinois" },
      ];

      const result = filterCities(cities, "id", "3");

      const expected = [
        { id: 3, name: "Chicago", description: "City in Illinois" },
      ];

      expect(result).toEqual(expected);
    });

    it("should return all cities if the filter value is an empty string", () => {
      const cities = [
        { id: 1, name: "New York", description: "City in New York" },
        { id: 2, name: "Los Angeles", description: "City in California" },
        { id: 3, name: "Chicago", description: "City in Illinois" },
      ];

      const result = filterCities(cities, "name", "");

      const expected = cities;

      expect(result).toEqual(expected);
    });
  });
});
