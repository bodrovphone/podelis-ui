import { getEnding } from "../utils";

describe("getEnding should return correct string", () => {
  it("test День/Час", () => {
    // 1, 21, 31, 41 ... 101
    expect(getEnding(1, true)).toBe("день");

    expect(getEnding(31, false)).toBe("31 час");

    expect(getEnding(101, false)).toBe("101 час");
  });

  it("test Дня/Часа", () => {
    // 2, 3, 4, 22, 23, 24, 32, 33, 34 ... 102, 103 ...
    expect(getEnding(2, true)).toBe("2 дня");

    expect(getEnding(23, false)).toBe("23 часа");

    expect(getEnding(184, false)).toBe("184 часа");
  });

  it("test Дней/Часов", () => {
    /// 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27... 55, 66...105, 111
    expect(getEnding(11, true)).toBe("11 дней");

    expect(getEnding(15, false)).toBe("15 часов");

    expect(getEnding(56, false)).toBe("56 часов");

    expect(getEnding(100, true)).toBe("100 дней");

    expect(getEnding(137, false)).toBe("137 часов");

    expect(getEnding(508, false)).toBe("508 часов");

    expect(getEnding(669, false)).toBe("669 часов");
  });
});
