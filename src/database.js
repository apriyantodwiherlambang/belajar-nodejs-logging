// Note :
// Saat membuat aplikasi, sudah pasti kita akan sering menggunakan JS Module, baik itu yang kita buat sendiri, atau JS Modules opensource
// Jest juga bisa digunakan untuk melakukan mock terhadap modules

export const getProductById = (id) => {
  // select * from products where id = ${id}
  throw new Error("Not Implemented");
};

export const getAllProducts = () => {
  // select * from products
  throw new Error("Not Implemented");
};
