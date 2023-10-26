const sortNumbersAscending = require("./sortAscending");

describe("sortNumbersAscending", () => {
  it("should sort an array of numbers in ascending order", () => {
    const numbers = [11, 4, 2, 5, 8, 6, 20, 14];
    expect(sortNumbersAscending(numbers)).toEqual([2, 4, 5, 6, 8, 11, 14, 20]);
  });

  it("should return an empty array when given an empty array", () => {
    const numbers = [];
    expect(sortNumbersAscending(numbers)).toEqual([]);
  });

  it("should return the same array when given an array with one number", () => {
    const numbers = [11];
    expect(sortNumbersAscending(numbers)).toEqual([11]);
  });
});
