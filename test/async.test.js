// Note :
// Saat membuat kode program JavaScript, penggunaan kode asynchronous pasti sering kita gunakan, baik itu menggunakan Promise atau menggunakan Async Await
// Jest terintegrasi dengan baik jika kita ingin melakukan pengetesan terhadap kode yang async
// Namun saat kita melakukan pengetesan kode async, kita harus memberi tahu ke Jest, hal ini agar Jest tahu dan bisa menunggu kode async nya, sebelum melanjutkan ke unit test selanjutnya
// Caranya sebenarnya sangat mudah, kita cukup gunakan async code di closure function Jest

// Sebelumnya kita menggunakan async await untuk melakukan matchers, sebenarnya Jest juga memiliki fitur matchers terhadap data async atau Promise
// Hal ini mempermudah kita ketika ingin melakukan matchers, sehingga tidak perlu melakukan await pada async function nya
// Semua Async Matchers mengembalikan Promise

// expect(promise).resolves = Ekspektasi bahwa promise sukses, dan selanjutnya kita bisa gunakan Matchers function lainnya
// expect(promise).rejects = Ekspektasi bahwa promise gagal, dan selanjutnya kita bisa gunakan Matchers function lainnya

import { sayHelloAsync } from "../src/async.js";

test("test async function", async () => {
  const result = await sayHelloAsync("Apri");
  expect(result).toBe("Hello Apri");
});

test("test async matchers", async () => {
  await expect(sayHelloAsync("Apri")).resolves.toBe("Hello Apri");
  await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});
