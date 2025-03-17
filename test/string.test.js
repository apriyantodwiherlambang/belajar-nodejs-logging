// Note :
// Jest juga memiliki matchers function yang digunakan untuk value berupa String
// Jika kita ingin memastikan sebuah string sama, kita bisa gunakan toBe() atau toEqual()
// .toMatch(regex) = Memastikan value sesuai dengan regex

test("string", () => {
  const name = "Apriyanto Dwi Herlambang";

  expect(name).toBe("Apriyanto Dwi Herlambang");
  expect(name).toMatch(/mbang/);
});
