// Note :
// Sebelumnya kita sudah membuat Mock Function
// Jest juga bisa digunakan untuk membuat Mock Function yang bersifat Async, sehingga mengembalikan Promise
// Ada beberapa function yang bisa kita gunakan untuk mengembalikan result Promise
// mockResolvedValue(value) https://jestjs.io/docs/mock-function-api#mockfnmockresolvedvaluevalue
// mockRejectedValue(value) https://jestjs.io/docs/mock-function-api#mockfnmockrejectedvaluevalue
// Atau kita bisa manual membuat Promise dengan menggunakan mockImplementation()

import { getBalance } from "../src/async.js";

test("mock async function", async () => {
  const from = jest.fn();
  from.mockResolvedValueOnce(1000);

  await expect(getBalance("Apri", from)).resolves.toEqual({
    name: "Apri",
    balance: 1000,
  });

  expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
});

// recomended test
test.failing("mock async function rejected", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("Ups"));

  await getBalance("Apri", from);
});

test("mock async function error matchers", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce("Rejected");

  await expect(getBalance("Apri", from)).rejects.toBe("Rejected");
});
