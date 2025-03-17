test("numbers", () => {
  const value = 2 + 2;

  expect(value).toBeGreaterThan(3); // Memastikan value lebih besar dari n
  expect(value).toBeGreaterThanOrEqual(4); // Memastikan value lebih besar atau sama dengan n

  expect(value).toBeLessThan(5); // Memastikan value lebih kecil dari n
  expect(value).toBeLessThanOrEqual(4); // Memastikan value lebih kecil atau sama dengan n

  expect(value).toBe(4);
});
