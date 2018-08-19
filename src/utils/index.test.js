import { getEnglishDay, unixTimestampToDate } from "./index";

describe("utils", () => {
  describe("unixTimeToDate", () => {
    it("should return a date when gets a unix timestamp", () => {
      const result = unixTimestampToDate(1534674031);
      expect(typeof result).toBe("object");
      expect(result instanceof Date).toBe(true);
    });
  });

  describe("getEnglishDay", () => {
    const RealDate = Date;
    beforeAll(() => {
      const constantDate = new Date("2018");
      Date = class extends Date {
        constructor() {
          return constantDate;
        }
      };
    });

    afterAll(() => {
      global.Date = RealDate;
    });

    it("return today's date when no args", () => {
      expect(getEnglishDay()).toBe("Monday");
    });
  });
});
