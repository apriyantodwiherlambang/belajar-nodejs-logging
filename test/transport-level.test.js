// Note :
// Beberapa Transport memiliki pengaturan Level sendiri
// Saat sebuah Transport memiliki pengaturan Level, secara otomatis Transport hanya akan menerima log dengan level tersebut atau yang lebih tinggi
// Hal ini sangat cocok misal ketika kita ingin memisahkan beberapa level log di transport yang berbeda

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
        level: "error",
        filename: "application-error.log",
      }),
    ],
  });

  logger.info("Hello World");
  logger.info("Hello World");
  logger.info("Hello World");
  logger.info("Hello World");
  logger.error("Hello Error");
  logger.error("Hello Error");
  logger.error("Hello Error");
});
