import { capitalize } from "./jestPractice.js";
import { reverseString } from "./jestPractice.js";
import { createCalculator } from "./jestPractice.js";
import { caesarCipher } from "./jestPractice.js";
import { analyzeArray } from "./jestPractice.js";


test("word line will return Line", () => {
    expect(capitalize("line")).toMatch("Line");
});

test("line will return enil", () => {
    expect(reverseString("line")).toMatch("enil");
})

test("2 + 3 will equal 5", () => {
    const myCalc = createCalculator();
    expect(myCalc.add(2,3)).toBe(5);
});

test("3 - 2 will equal 1", () => {
    const myCalc = createCalculator();
    expect(myCalc.subtract(3,2)).toBe(1);
});

test("2 x 3 will equal 6", () => {
    const myCalc = createCalculator();
    expect(myCalc.multiply(2,3)).toBe(6);
});

test("14 / 2 will equal 7", () => {
    const myCalc = createCalculator();
    expect(myCalc.divide(14,2)).toBe(7);
});

test("(`xyz`, 3) returns `abc`", () => {
    expect(caesarCipher("xyz", 3)).toMatch("abc");
})

test("`HeLLo` will return KhOOr", () => {
    expect(caesarCipher("HeLLo", 3)).toMatch("KhOOr");
});

test("`Hello, World!`, 3)", () => {
    expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
});

test("Average of arr[2,4,6] equals 4", () => {
    const result = analyzeArray([2,4,6]);
    expect(result.average).toBe(4);
});

test("Length of arr[2,4,6] equals 3", () => {
    const result = analyzeArray([2,4,6]);
    expect(result.length).toBe(3);
});

test("Minimum of arr[2,4,6] to be 2", () => {
    const result = analyzeArray([2,4,6]);
    expect(result.min).toBe(2);
});

test("Maximum of arr[2,4,6] to 6", () => {
    const result = analyzeArray([2,4,6]);
    expect(result.max).toBe(6);
});

test("If array is not numbers throw error", () => {
    expect(() => analyzeArray(["a"])).toThrow("Array can only contain numbers");
});