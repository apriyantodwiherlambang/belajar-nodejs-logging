// Note :
// Kadang saat membuat unit test, kita membuat kode yang perlu dibuat sebelum unit test berjalan
// Selain itu, kadang kita juga kita membuat kode yang perlu dilakukan setelah unit test berjalan
// Jest memiliki fitur untuk menangani kasus seperti ini

// beforeEach(function) = Function akan dieksekusi sebelum unit test berjalan, jika terdapat lima unit test dalam file, artinya akan dieksekusi juga sebanyak lima kali
// afterEach(function) = Function akan dieksekusi setelah unit test selesai, jika terdapat lima unit test dalam file, artinya akan dieksekusi juga sebanyak lima kali

// Namun kadang-kadang, kita ingin membuat kode yang hanya dieksekusi sekali saja dalam sebuah file unit test
// Sekali sebelum semua unit test
// Dan sekali setelah semua unit test
// Jest juga menyediakan fitur tersebut

// beforeAll(function) = Function akan dieksekusi sekali sebelum semua unit test berjalan di file unit test
// afterAll(function) = Function akan dieksekusi sekali setelah semua unit test selesai di file unit test

import { sum } from "../src/sum.js";

beforeAll(async () => {
  console.info("Before All");
});

afterAll(async () => {
  console.info("After All");
});

beforeEach(async () => {
  console.info("Before Each");
});

afterEach(async () => {
  console.info("After Each");
});

test("first test", async () => {
  expect(sum(10, 10)).toBe(20);
  console.info("First Test");
});

test("second test", () => {
  expect(sum(10, 10)).toBe(20);
  console.info("Second Test");
});
