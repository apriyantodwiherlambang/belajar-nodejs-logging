// Note :
// Sebelumnya untuk membuat unit test, kita menggunakan function test()
// Di Jest, terdapat alias untuk function test(), yaitu it()
// Sebenarnya tidak ada bedanya dengan function test(), hanya saja, kadang ada programmer yang lebih suka menggunakan function it() agar unit test yang dibuat mirip dengan cerita ketika dibaca kodenya

import { sumAll } from "../src/sum";

describe("when call sumAll", () => {
  it("should get 30 with parameter [10, 10, 10]", () => {
    expect(sumAll([10, 10, 10])).toBe(30);
  });
  it("should get 50 with parameter [10, 10, 10, 10, 10]", () => {
    expect(sumAll([10, 10, 10, 10, 10])).toBe(50);
  });
});
