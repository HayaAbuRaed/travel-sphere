import { getIconByName } from "../icons";

describe("Icons utility functions test suite", () => {
  describe("getIconByName", () => {
    it("should return the matching icon based on the given search string", () => {
      const searchString = "bed";
      const expectedIcon = getIconByName(searchString);
      expect(expectedIcon).not.toBeNull();
    });

    it("should return null if no matching icon is found based on the given search string", () => {
      const searchString = "unknown";
      const expectedIcon = getIconByName(searchString);
      expect(expectedIcon).toBeNull();
    });

    it("should return null if the search string is empty", () => {
      const searchString = " ";
      const expectedIcon = getIconByName(searchString);
      expect(expectedIcon).toBeNull();
    });
  });
});
