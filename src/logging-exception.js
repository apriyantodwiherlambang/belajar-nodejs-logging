// Note :
// Saat kita membuat program NodeJS, kadang kita lupa menangkap Exception
// Hal ini bisa berbahaya karena nanti kita tidak bisa melakukan debug Exception dengan baik, sehingga tidak bisa kita investigasi selanjutnya

// Winston memiliki fitur secara otomatis yang bisa digunakan untuk menangkap Exception yang belum ter-handle
// Kita bisa lakukan pengaturan ini di Logger, yang secara otomatis exception akan dikirim ke semua Transport
// Atau kita bisa lakukan pengaturan ini di Transport

import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  // handleExceptions: true,
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      handleExceptions: true,
      filename: "exception.log",
    }),
  ],
});

hello();
