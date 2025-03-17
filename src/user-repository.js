// Note :
// Sebelumnya kita sudah bahas tentang cara melakukan Mock Function, dan juga melakukan mock function di Modules
// Selain Function, Jest juga bisa digunakan untuk melakukan Mock Class
// Seperti yang sudah kita pelajari di JavaScript OOP, Class di JavaScript sebenarnya adalah Constructor Function, yang sebenarnya tidak ada bedanya dengan Function biasanya
// Oleh karena itu, untuk melakukan Mock Class, sama saja seperti kita melakukan Mock Function

export class UserRepository {
  save(user) {
    throw new Error("Not implemented");
  }

  findById(id) {
    throw new Error("Not implemented");
  }

  findAll() {
    throw new Error("Not implemented");
  }
}
