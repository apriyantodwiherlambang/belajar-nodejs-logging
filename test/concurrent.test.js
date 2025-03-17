// Note :
// Secara default, semua unit test akan dijalankan secara sequential, dan unit test selanjutnya akan dijalankan ketiak unit test sebelumnya telah selesai
// Jest juga mendukung concurrent unit test, dimana kita bisa menandai sebuah unit test agar jalan secara concurrent atau async sehingga tidak perlu ditunggu
// Saat dibuatnya materi ini, fitur concurrent sendiri masih experimental atau belum stabil
// https://jestjs.io/docs/api#testconcurrentname-fn-timeout

import { sayHelloAsync } from "../src/async.js";

test.concurrent("concurrent 1", async () => {
  await expect(sayHelloAsync("Apri")).resolves.toBe("Hello Apri");
});

test.concurrent("concurrent 2", async () => {
  await expect(sayHelloAsync("Apri")).resolves.toBe("Hello Apri");
});

test.concurrent("concurrent 3", async () => {
  await expect(sayHelloAsync("Apri")).resolves.toBe("Hello Apri");
});
