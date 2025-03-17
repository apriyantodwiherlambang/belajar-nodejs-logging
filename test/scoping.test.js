// Note :
// Saat kita menggunakan Setup Function, secara default akan dieksekusi pada setiap test() function yang terdapat di file unit test
// Jest memiliki fitur scoping atau grouping, dimana kita bisa membuat group unit test menggunakan function describe()
// Setup Function yang dibuat di dalam describe() hanya digunakan untuk unit test di dalam describe() tersebut
// Namun Setup Function diluar describe() secara otomatis juga digunakan di dalam describe()

// Jest juga mendukung nested scoping, artinya kita bisa membuat scoping menggunakan describe() function di dalam describe() function

beforeAll(() => console.info("Before All Outer"));
afterAll(() => console.info("After All Outer"));
beforeEach(() => console.info("Before Each Outer"));
afterEach(() => console.info("After Each Outer"));

test("Test Outer", () => console.info("Test Outer"));

describe("Inner", () => {
  beforeAll(() => console.info("Before All Inner"));
  afterAll(() => console.info("After All Inner"));
  beforeEach(() => console.info("Before Each Inner"));
  afterEach(() => console.info("After Each Inner"));

  test("Test Inner", () => console.info("Test Inner"));
});
