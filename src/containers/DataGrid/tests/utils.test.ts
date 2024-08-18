import { SortConfigState } from "../types";
import { sortData } from "../utils";
import { entitiesExample } from "./constants";

interface Entity {
  id: number;
  name: string;
}

describe("DataGrid/utils.ts", () => {
  describe("sortData function", () => {
    it("should sort the data based on the sort configuration asc correctly", () => {
      const sortConfig: SortConfigState<Entity> = {
        key: "name",
        direction: "asc",
      };

      const result = sortData(entitiesExample, sortConfig);

      const expected = [
        { id: 2, name: "Hotel 1" },
        { id: 1, name: "Hotel 2" },
        { id: 3, name: "Hotel 3" },
        { id: 4, name: "Hotel 4" },
        { id: 5, name: "Hotel 4" },
      ];

      expect(result).toEqual(expected);
    });

    it("should sort the data based on the sort configuration desc correctly", () => {
      const sortConfig: SortConfigState<Entity> = {
        key: "name",
        direction: "desc",
      };

      const result = sortData(entitiesExample, sortConfig);

      const expected = [
        { id: 4, name: "Hotel 4" },
        { id: 5, name: "Hotel 4" },
        { id: 3, name: "Hotel 3" },
        { id: 1, name: "Hotel 2" },
        { id: 2, name: "Hotel 1" },
      ];

      expect(result).toEqual(expected);
    });

    it("should return the same data if the sort configuration is null", () => {
      const result = sortData(entitiesExample, null);

      expect(result).toEqual(entitiesExample);
    });
  });
});
