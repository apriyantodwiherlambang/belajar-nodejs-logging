// Note :
// Selain kasus Exception yang tidak terhandle, kadang sering ada kasus di NodeJS kita sering lupa meng-handle Promise Rejection

// Winston juga memiliki fitur yang bisa kita gunakan untuk menangkap semua Promise yang reject secara otomatis
// Jadi kita bisa melihat detail error Rejections tersebut
// Sama seperti Exceptions, kita bisa atur ini di Logger atau di Transport

import winston from "winston";

async function callAsync() {
  return Promise.reject("Ups");
}

const logger = winston.createLogger({
  level: "info",
  // handleExceptions: true,
  // handleRejections: true,
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      handleExceptions: true,
      handleRejections: true,
      filename: "exception.log",
    }),
  ],
});

callAsync();
