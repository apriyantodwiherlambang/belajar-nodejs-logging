// Note :
// Saat melakukan pengecekan menggunakan matchers, kadang-kadang kita ingin melakukan pengecekan kebalikannya
// Misal tidak sama dengan, tidak lebih dari, tidak contains, dan lain-lain
// Jest memiliki fitur untuk melakukan “not” di Matchers nya, dengan menggunakan property not di matchers, secara otomatis kita akan melakukan pengecekan kebalikannya
// Semua jenis matchers yang sudah kita bahas, mendukung property not ini

test("string.not", () => {
  const name = "Apriyanto Dwi Herlambang";

  expect(name).not.toBe("Joko");
  expect(name).not.toEqual("Joko");
  expect(name).not.toMatch(/Joko/);
});

test("number.not", () => {
  const value = 2 + 2;

  expect(value).not.toBeGreaterThan(6);
  expect(value).not.toBeLessThan(3);
  expect(value).not.toBe(10);
});
