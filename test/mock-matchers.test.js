// Note :
// Sebelumnya, untuk mengecek berapa kali mock function dipanggil, atau apa parameter yang diterima oleh mock function, kita lakukan secara manual dengan mengecek data di mock property
// Jest sendiri menyediakan fitur Matchers untuk mock, dimana kita bisa melakukan matchers dengan lebih mudah dibandingkan secara manual

import { calculate } from "../src/sum.js";

test("test mock matchers", () => {
  const callback = jest.fn();

  calculate([10, 10, 10], callback);
  calculate([10, 10, 10, 10, 10], callback);

  expect(callback).toHaveBeenCalled(); // expect(mock).toHaveBeenCalled() = Memastikan mock pernah dipanggil
  expect(callback).toHaveBeenCalledTimes(2); // expect(mock).toHaveBeenCalledTimes(number) = Memastikan mock pernah dipanggil sebanyak number
  expect(callback).toHaveBeenCalledWith(30); // expect(mock).toHaveBeenCalledWith(arg1, arg2, ...) = Memastikan mock pernah dipanggil dengan parameter
  expect(callback).toHaveBeenCalledWith(50);
});
