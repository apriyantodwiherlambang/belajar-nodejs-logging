// Note :
// Jest bisa digunakan untuk membuat mock function
// Dimana kita bisa membuat tiruan dari sebuah function
// Salah satu fitur dari mock function adalah, kita bisa melihat detail dari parameter yang digunakan untuk memanggil mock function tersebut
// Untuk membuat mock function, kita bisa menggunakan jest.fn()
// https://jestjs.io/docs/mock-function-api#jestfnimplementation

// Saat menggunakan mock, kadang kita ingin melihat parameter apa yang digunakan untuk memanggil mock
// Atau bahkan return value apa yang dikembalikan oleh mock function
// Kita bisa menggunakan property mock dari mock function untuk melihatnya
// https://jestjs.io/docs/mock-function-api#mockfnmockcalls
// https://jestjs.io/docs/mock-function-api#mockfnmockresults

import { calculate, calculateAndReturn } from "../src/sum.js";

test("test calculate", () => {
  const callback = jest.fn();

  calculate([10, 10, 10], callback);
  calculate([10, 10, 10, 10, 10], callback);

  expect(callback.mock.calls.length).toBe(2);

  console.info(callback.mock.calls);

  expect(callback.mock.calls[0][0]).toBe(30);
  expect(callback.mock.calls[1][0]).toBe(50);
});

test("test calculate without mock function", () => {
  const logging = (total) => {
    console.info(total);
  };

  calculate([10, 10, 10], logging);
  calculate([10, 10, 10, 10, 10], logging);
});

// Kadang ada kasus dimana kita ingin membuat mock function dengan return value yang sudah ditentukan
// Namun jika pada kasus sederhana tanpa butuh logic, kita bisa membuat return value dengan mudah pada mock function
// Kita bisa memanfaatkan function mockReturnValue(returnValue) atau mockReturnValueOnce(returnValue)
// https://jestjs.io/docs/mock-function-api#mockfnmockreturnvaluevalue
// https://jestjs.io/docs/mock-function-api#mockfnmockreturnvalueoncevalue

test("test mock return value", () => {
  const callback = jest.fn();
  callback.mockReturnValueOnce(40);
  callback.mockReturnValueOnce(80);

  expect(calculateAndReturn([10, 10, 10], callback)).toBe(40);
  expect(calculateAndReturn([10, 10, 10], callback)).toBe(80);

  expect(callback.mock.results[0].value).toBe(40);
  expect(callback.mock.results[1].value).toBe(80);
});

// Pada kasus tertentu, kadang kita ingin membuat implementasi logic dari sebuah mock function
// Dengan menggunakan ini, kita bisa mengubah juga return value dari mock function secara dinamis
// Kita bisa menggunakan mockImplementation() atau mockImplementationOnce()
// https://jestjs.io/docs/mock-function-api#mockfnmockimplementationfn
// https://jestjs.io/docs/mock-function-api#mockfnmockimplementationoncefn

test("test mock implementation", () => {
  const callback = jest.fn();
  callback.mockImplementation((total) => {
    return total * 2;
  });

  expect(calculateAndReturn([10, 10, 10], callback)).toBe(60);
  expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(100);

  expect(callback.mock.results[0].value).toBe(60);
  expect(callback.mock.results[1].value).toBe(100);
});
