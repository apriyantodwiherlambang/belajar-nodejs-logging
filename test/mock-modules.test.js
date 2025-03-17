// Note :
// Untuk melakukan mock modules, kita bisa gunakan function jest.mock(module)
// Secara otomatis ketika kita import dari module tersebut, maka jest akan melakukan mock
// https://jestjs.io/docs/jest-object#jestmockmodulename-factory-options
// Jika kita tidak ingin melakukan mock lagi, kita bisa gunakan jest.unmock()
// https://jestjs.io/docs/jest-object#jestunmockmodulename

import { ProductService } from "../src/product-service.js";
import { getAllProducts, getProductById } from "../src/database.js";

jest.mock("../src/database.js");

test("mock modules getProductById", () => {
  getProductById.mockImplementation((id) => {
    return {
      id: id,
      name: "Product Mock",
    };
  });

  const product = ProductService.findById(1);

  expect(product).toEqual({
    id: 1,
    name: "Product Mock",
  });
});

test("mock modules getAllProducts", () => {
  const products = [
    {
      id: 1,
      name: "Product Mock",
    },
    {
      id: 2,
      name: "Product Mock",
    },
  ];

  getAllProducts.mockImplementation(() => {
    return products;
  });

  expect(ProductService.findAll()).toEqual(products);
});
