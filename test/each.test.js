// Note :
// Each Function memungkinkan kita menggunakan data dalam bentuk array, yang akan di iterasi ke dalam kode unit test yang sama
// https://jestjs.io/docs/api#testeachtablename-fn-timeout

import { sumAll } from "../src/sum.js";

const table = [
  [[], 0],
  [[10], 10],
  [[10, 10, 10], 30],
  [[10, 10, 10, 10, 10], 50],
  [[10, 10, 10, 10, 10, 10, 10], 70],
];

// %i = Integer, %s- String
test.each(table)("test sumAll(%s) should result %i", (numbers, expected) => {
  expect(sumAll(numbers)).toBe(expected);
});
