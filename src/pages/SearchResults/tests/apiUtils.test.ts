import { SearchRequest } from "src/types/search";
import { getQueriesString } from "../API/utils";

describe("SearchResults/API/utils.ts", () => {
  describe("getQueriesString", () => {
    it("should return a query string with all the query params", () => {
      const payload: SearchRequest = {
        checkInDate: "2021-12-01",
        checkOutDate: "2021-12-05",
        city: "New York",
        numberOfRooms: 1,
        adults: 2,
        children: 1,
      };

      const result = getQueriesString(payload);

      expect(result).toBe(
        "checkInDate=2021-12-01&checkOutDate=2021-12-05&city=New York&numberOfRooms=1&adults=2&children=1"
      );
    });

    it("should return a query string without the unset query params", () => {
      const payload: SearchRequest = {
        checkInDate: "2021-12-01",
        checkOutDate: "2021-12-05",
        city: "",
        numberOfRooms: 1,
        adults: 2,
        children: 0,
        starRate: 4,
      };

      const result = getQueriesString(payload);

      expect(result).toBe(
        "checkInDate=2021-12-01&checkOutDate=2021-12-05&numberOfRooms=1&adults=2&starRate=4"
      );
    });

    it("should return an empty string if all the query params are unset", () => {
      const payload: SearchRequest = {
        checkInDate: "",
        checkOutDate: "",
        city: "",
        numberOfRooms: 0,
        adults: 0,
        children: 0,
      };

      const result = getQueriesString(payload);

      expect(result).toBe("");
    });
  });
});
