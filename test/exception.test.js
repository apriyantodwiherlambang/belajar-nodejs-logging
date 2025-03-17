// Note :
// Saat membuat kode program, kadang kita sering membuat exception
// Dalam unit test pun, kadang kita berharap sebuah exception terjadi
// Jest juga memiliki matchers untuk melakukan pengecekan exception
// Khusus untuk jenis matchers exception, kita perlu menggunakan closure function di value expect() nya, hal ini untuk memastikan exception ditangkap oleh matchers, jika tidak menggunakan closure function, maka exception akan terlanjur terjadi sebelum kita memanggil expect() function

// .toThrow() = Memastikan terjadi exception apapun
// .toThrow(exception) = Memastikan terjadi exception sesuai dengan expected exception
// .toThrow(message) = Memastikan terjadi exception sesuai dengan string message

import { callMe, MyException } from "../src/exception.js";

test("exception", () => {
  expect(() => callMe("Apri")).toThrow();
  expect(() => callMe("Apri")).toThrow(MyException);
  expect(() => callMe("Apri")).toThrow("Ups my exceptions happens");
});

test("exception not happens", () => {
  expect(callMe("Budi")).toBe("OK");
});
