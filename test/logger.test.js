// Note :
// Logger adalah sebuah object di Winston, yang digunakan untuk melakukan logging
// Untuk membuat object Logger, kita bisa menggunakan function createLogger() yang terdapat di package/module winston

import winston from "winston";

test("create new logger", () => {
  const logger = winston.createLogger({});

  logger.log({
    level: "info",
    message: "Hello Logging!",
  });
});
