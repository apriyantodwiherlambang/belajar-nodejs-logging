// Note :
// Sebelumnya kita hanya menggunakan Console Transport, selain Console Transport, di Winston juga terdapat File Transport
// Dari namanya kita sudah tahu, bahwa Transport ini akan menyimpan data log ke file
// Kita bisa menambahkan langsung beberapa Transport dalam satu Logger object

import winston from "winston";

test("create new logger with console & file transport", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "application.log",
      }),
      new winston.transports.File({
        filename: "apri.log",
      }),
    ],
  });

  logger.info("Hello World");
  logger.info("Hello World");
  logger.info("Hello World");
  logger.info("Hello World");
});
