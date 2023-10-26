const isPalindrome = require("./isPalindrome");

describe("isPalindrome", () => {
  it("should return true if the string is a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("should return false for a non-palindrome string", () => {
    expect(isPalindrome("Hello World!")).toBe(false);
  });

  it("should return true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("should return true for a single character string", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("should ignore case when checking for palindromes", () => {
    expect(isPalindrome("Madam")).toBe(true);
  });

  it("should ignore non-alphanumeric characters when checking for palindromes", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });
});
