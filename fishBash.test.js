const fishBash = require("./fishBash");

describe("fishBash", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should print "fish" for numbers divisible by 3', () => {
    fishBash(6);
    expect(consoleSpy).toHaveBeenCalledWith("fish");
  });

  it('should print "bash" for numbers divisible by 5', () => {
    fishBash(10);
    expect(consoleSpy).toHaveBeenCalledWith("bash");
  });

  it('should print "fish bash" for numbers divisible by 15', () => {
    fishBash(30);
    expect(consoleSpy).toHaveBeenCalledWith("fish bash");
  });

  it("should print the number itself for other cases", () => {
    fishBash(7);
    expect(consoleSpy).toHaveBeenCalledTimes(7);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 1);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 2);
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "fish");
    expect(consoleSpy).toHaveBeenNthCalledWith(4, 4);
    expect(consoleSpy).toHaveBeenNthCalledWith(5, "bash");
    expect(consoleSpy).toHaveBeenNthCalledWith(6, "fish");
    expect(consoleSpy).toHaveBeenNthCalledWith(7, 7);
  });
});
