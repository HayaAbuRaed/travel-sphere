import { checkTokenExpiration, getJwtData } from "../jwtToken";

describe("JWT Token utility functions test suite", () => {
  describe("checkTokenExpiration function", () => {
    it("should return true if token is expired", () => {
      const expDate = new Date("2021-10-10");
      const result = checkTokenExpiration(expDate);
      expect(result).toBe(true);
    });

    it("should return false if token is not expired", () => {
      const expDate = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);
      const result = checkTokenExpiration(expDate);
      expect(result).toBe(false);
    });

    it("should run correctly if expDate is expired as number", () => {
      const expDate = new Date().getTime() / 1000 - 2 * 60 * 60;
      const result = checkTokenExpiration(expDate);
      expect(result).toBe(true);
    });

    it("should run correctly if expDate is not expired as number", () => {
      const expDate = new Date().getTime() / 1000 + 2 * 60 * 60;
      const result = checkTokenExpiration(expDate);
      expect(result).toBe(false);
    });

    it("should run correctly if expDate is equal to now", () => {
      const expDate = new Date();
      const result = checkTokenExpiration(expDate);
      expect(result).toBe(true);

      const expDate2 = new Date().getTime() / 1000;
      const result2 = checkTokenExpiration(expDate2);
      expect(result2).toBe(true);
    });
  });

  describe("getJwtData function", () => {
    it("should return correct data", () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJnaXZlbl9uYW1lIjoiSm9obiIsImZhbWlseV9uYW1lIjoiRG9lIiwidXNlclR5cGUiOiJhZG1pbiIsImV4cCI6MTYzMjA2MjAzMH0.CkhEcB81r5Hes83TYTJGQkEF4RE1JCe07djzVXsuhUM";

      const result = getJwtData(token);

      expect(result).toEqual({
        userId: 1,
        givenName: "John",
        familyName: "Doe",
        userType: "admin",
        expirationDate: 1632062030,
      });
    });
  });
});
