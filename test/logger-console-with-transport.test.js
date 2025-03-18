// Note :
// Saat membuat Logger, secara default Logger tidak akan menggunakan Transport
// Apa itu Transport? Transport adalah destinasi atau target yang digunakan untuk mengirim log.
// Ada banyak sekali Transport, salah satunya yang paling sederhana adalah Console
// Console merupakan Transport yang digunakan untuk mengirim data log ke console/stdout

// Dalam logging, terdapat istilah yang bernama Level, Level biasanya digunakan sebagai informasi seberapa penting log tersebut
// Level dimulai dari paling rendah ke paling tinggi, semakin tinggi Level nya, artinya semakin penting informasi log tersebut
// Untuk menambahkan Level ketika melakukan log, kita bisa ubah attribute level menjadi level yang kita inginkan

import winston, { transports } from "winston";

test("create new logger with console transport", () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})],
  });

  logger.log({
    level: "info",
    message: "Hello Logging!",
  });
});
