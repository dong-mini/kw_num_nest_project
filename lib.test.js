const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("prime(11) should be true", () => {
    expect(lib.prime([11])).toBe(true);
});


test("prime(10) should be false", () => {
    expect(lib.prime([10])).toBe(false);
});

test("factorial(3) should be 6", () => {
    expect(lib.factorial([3])).toBe(6);
});


test("factorial(5) should be 120", () => {
    expect(lib.factorial([5])).toBe(120);
});
