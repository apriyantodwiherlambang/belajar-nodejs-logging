// Note :
// Jest juga memiliki function yang bisa kita gunakan untuk mengecek data di dalam sebuah value array
// Jika ingin memastikan bahwa array sama, kita bisa menggunakan toEqual()
// .toContain(item) = Memastikan value array memiliki item, dimana pengecekan item menggunakan toBe()
// .toContainEqual(item) = Memastikan value array memiliki item, dimana pengecekan item menggunakan toEqual()

test("array simple", () => {
  const names = ["apriyanto", "dwi", "herlambang"];
  expect(names).toEqual(["apriyanto", "dwi", "herlambang"]);
  expect(names).toContain("apriyanto");
});

test("array object", () => {
  const persons = [
    {
      name: "Apri",
    },
    {
      name: "Budi",
    },
  ];
  expect(persons).toContainEqual({
    name: "Apri",
  });
});
