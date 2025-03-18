// Note :
// Format adalah object yang digunakan untuk melakukan formatting data log sebelum dikirim ke Transport
// Saat kita membuat Logger, secara default, Logger akan akan menggunakan JSON Format, artinya data akan dikirim dalam bentuk JSON
// Winston juga menyediakan banyak format lain selain JSON
// Winston juga menyediakan format printf, yang bisa digunakan untuk membuat format sendiri

import winston from "winston";

test("logging with printf format", () => {
  const logger = winston.createLogger({
    level: "info",
    // format: winston.format.json(),
    // format: winston.format.simple(),
    // format: winston.format.logstash(),
    format: winston.format.printf((log) => {
      return `${new Date()} : ${log.level.toUpperCase()}: ${log.message}`;
    }),
    transports: [new winston.transports.Console({})],
  });

  logger.info("Hello Format");
  logger.warn("Hello Format");
  logger.error("Hello Format");
});

test("logging with format", () => {
  const logger = winston.createLogger({
    level: "info",
    // format: winston.format.json(),
    // format: winston.format.simple(),
    format: winston.format.logstash(),
    transports: [new winston.transports.Console({})],
  });

  logger.info("Hello Format");
});
