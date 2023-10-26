const sortNumbersDescending = require("./sortDescending");

describe("sortNumbersDescending", () => {
  it("should sort an array of numbers in descending order", () => {
    const numbers = [11, 4, 2, 5, 8, 6, 20, 14];
    expect(sortNumbersDescending(numbers)).toEqual([20, 14, 11, 8, 6, 5, 4, 2]);
  });

  it("should return an empty array when given an empty array", () => {
    const numbers = [];
    expect(sortNumbersDescending(numbers)).toEqual([]);
  });

  it("should return the same array when given an array with one number", () => {
    const numbers = [11];
    expect(sortNumbersDescending(numbers)).toEqual([11]);
  });
});
