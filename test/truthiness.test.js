test("truthiness", () => {
  let value = null;
  expect(value).toBeNull(); // Memastikan value adalah null
  expect(value).toBeDefined(); // Kebalikan dari toBeUndefined()
  expect(value).toBeFalsy(); // Memastikan value bernilai apapun, asal if statement menganggap false

  value = undefined;
  expect(value).toBeUndefined(); // Memastikan value adalah undefined
  expect(value).toBeFalsy(); // Memastikan value bernilai apapun, asal if statement menganggap false

  value = "Apri";
  expect(value).toBeTruthy(); // Memastikan value bernilai apapun, asal if statement menganggap true
  expect(value).toBe("Apri");
});
