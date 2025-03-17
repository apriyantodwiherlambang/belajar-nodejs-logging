// Note :
// expect(value).toBe(expected)
// Value sama dengan expected, biasanya digunakan untuk value bukan object
// expect(value).toEqual(expected)
// Value sama dengan expected, dimana membandingkan semua properties secara recursive, atau dikenal dengan deep equality

test("test toBe", () => {
  const name = "Apri";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Apri");
});

test("test toEqual", () => {
  let person = { id: "apri" };
  Object.assign(person, { name: "Apri" });

  expect(person).toEqual({ id: "apri", name: "Apri" });
});
