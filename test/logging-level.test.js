// Note :
// Winston Level :
// - error
// - warn
// - info
// - http
// - verbose
// - debug
// - silly

// Secara default, saat kita membuat Logger,  Logger hanya akan menampilkan log dengan level info atau level diatasnya
// Jika kita ingin mengubah log level mana yang ingin kita tampilkan, maka kita perlu ubah konfigurasi level ketika kita membuat logger, dengan menggunakan level minimal yang ingin kita tampilkan

import winston from "winston";

test("create new logger with console transport", () => {
  const logger = winston.createLogger({
    level: "debug",
    transports: [new winston.transports.Console({})],
  });

  logger.log({ level: "error", message: "Hello Error" });
  logger.log({ level: "warn", message: "Hello Warn" });
  logger.log({ level: "info", message: "Hello Info" });
  logger.log({ level: "http", message: "Hello HTTP" });
  logger.log({ level: "verbose", message: "Hello Verbose" });
  logger.log({ level: "debug", message: "Hello Debug" });
  logger.log({ level: "silly", message: "Hello Silly" });
});

// Note :
// Logger juga memiliki function shortcut yang bisa digunakan untuk melakukan logging, sehingga kita tidak perlu menggunakan function log dan object dengan attribute level lagi
// Kita bisa langsung menggunakan function dengan nama sesuai dengan level nya, misal logger.info(message), logger.warn(message), dan lain-lain

test("logging with shortcut function", () => {
  const logger = winston.createLogger({
    level: "debug",
    transports: [new winston.transports.Console({})],
  });

  logger.error("Hello Error!");
  logger.warn("Hello Warn!");
  logger.info("Hello Info!");
  logger.http("Hello HTTP!");
  logger.verbose("Hello Verbose!");
  logger.debug("Hello Debug!");
  logger.silly("Hello Silly!");
});
