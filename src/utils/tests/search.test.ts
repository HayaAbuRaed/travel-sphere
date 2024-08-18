import {
  formatDate,
  formatDisplayDate,
  serializeDateRange,
  deserializeDateRange,
} from "../search";

describe("Search utility functions test suite", () => {
  describe("formatDate function", () => {
    it("should format date to be used in the API request", () => {
      const date = new Date("2024-08-07T00:00:00.000Z");
      expect(formatDate(date)).toBe("2024-08-07");
    });
  });

  describe("formatDisplayDate function", () => {
    it("should format date to be displayed on screen", () => {
      const date = new Date("2024-08-07T00:00:00.000Z");
      expect(formatDisplayDate(date)).toBe("Wed, Aug 7");
    });
  });

  describe("serializeDateRange function", () => {
    it("should serialize date range correctly to be added to the store", () => {
      const dateRange = {
        startDate: new Date("2024-08-07T00:00:00.000Z"),
        endDate: new Date("2024-08-10T00:00:00.000Z"),
      };

      expect(serializeDateRange(dateRange)).toEqual({
        startDate: "8/7/2024, 3:00:00 AM",
        endDate: "8/10/2024, 3:00:00 AM",
      });
    });
  });

  describe("deserializeDateRange function", () => {
    it("should deserialize date range correctly to be used when got from the store", () => {
      const dateRange = {
        startDate: "8/7/2024, 3:00:00 AM",
        endDate: "8/10/2024, 3:00:00 AM",
      };

      const result = deserializeDateRange(dateRange);

      expect(result).toEqual({
        startDate: new Date("2024-08-07T00:00:00.000Z"),
        endDate: new Date("2024-08-10T00:00:00.000Z"),
      });
    });
  });
});
