// Note :
// Saat kita melakukan mock class dengan melakukan mock modules, secara otomatis semua function di class tersebut akan ter-mock
// Kadang, misal ada kasus dimana kita ingin melakukan mock hanya sebagian function saja di dalam class
// Pada kasus ini, kita bisa menggunakan jest.spyOn()
// https://jestjs.io/docs/jest-object#jestspyonobject-methodname

import { UserRepository } from "../src/user-repository.js";
import { UserService } from "../src/user-service.js";

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock partial class findById", () => {
  const user = {
    id: 1,
    name: "Apri",
  };

  const findByIdMock = jest.spyOn(repository, "findById");
  findByIdMock.mockReturnValueOnce(user);

  expect(service.findById(1)).toEqual(user);
  expect(findByIdMock).toHaveBeenCalled();
  expect(findByIdMock).toHaveBeenCalledWith(1);
  expect(repository.findById).toHaveBeenCalled();
  expect(repository.findById).toHaveBeenCalledWith(1);
});

test.failing("test mock partial findAll", () => {
  service.findAll();
});
