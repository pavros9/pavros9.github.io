import imagemin from "imagemin";
import webp from "imagemin-webp";
import gulp from "gulp";
import svgsprite from "gulp-svg-sprite";
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения (подсказки)
import fs from "fs";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

imagemin(["src/assets/images/*.{jpg,png}"], {
  destination: "src/assets/images",
  plugins: [webp({ quality: 60 })],
});

gulp
  .src(`./src/assets/svg/**/*.svg`)
  .pipe(
    plumber(
      notify.onError({
        title: "SVG",
        message: "Error: <%= error.message %>",
      })
    )
  )
  .pipe(
    svgsprite({
      mode: {
        stack: {
          sprite: "./svgsprite",
          // Создавать страницу с перечнем иконок
          example: true,
        },
      },
    })
  )
  .pipe(gulp.dest(`./src/assets/svgsprite/`));

gulp
  .src(`./src/assets/fonts/*.otf`, {})
  .pipe(
    plumber(
      notify.onError({
        title: "FONTS",
        message: "Error: <%= error.message %>",
      })
    )
  )
  // Конвертируем в .ttf
  .pipe(
    fonter({
      formats: ["ttf"],
    })
  )
  .pipe(gulp.dest(`./src/assets/fonts/`));

gulp
  .src(`./src/assets/fonts/*.ttf`, {})
  .pipe(
    plumber(
      notify.onError({
        title: "FONTS",
        message: "Error: <%= error.message %>",
      })
    )
  )
  // Конвертируем в .woff
  .pipe(
    fonter({
      formats: ["woff"],
    })
  )
  // Выгружаем в папку с результатом
  .pipe(gulp.dest(`./src/assets/fonts/`))
  // Ищем файлы шрифтов .ttf
  .pipe(gulp.src(`./src/assets/fonts/*.ttf`))
  // Конвертируем в .woff2
  .pipe(ttf2woff2())
  // Выгружаем в папку с результатом
  .pipe(gulp.dest(`./src/assets/fonts/`));

// Файл стилей подключения шрифтов
let fontsFile = `./src/assets/styles/fonts.scss`;
// Проверяем существуют ли файлы шрифтов
fs.readdir("./src/assets/fonts/", function (err, fontsFiles) {
  if (fontsFiles) {
    // Проверяем существует ли файл стилей для подключения шрифтов
    if (!fs.existsSync(fontsFile)) {
      //Если файла нет, создаем его
      fs.writeFile(fontsFile, "", cb);
      let newFileOnly;
      for (var i = 0; i < fontsFiles.length; i++) {
        // Записываем подключения шрифтов в файл стилей
        let fontFileName = fontsFiles[i].split(".")[0];
        if (newFileOnly !== fontFileName) {
          let fontName = fontFileName.split("-")[0] ? fontFileName.split("-")[0] : fontFileName;
          let fontWeight = fontFileName.split("-")[1] ? fontFileName.split("-")[1] : fontFileName;

          if (fontWeight.toLowerCase() === "thin") {
            fontWeight = 100;
          } else if (fontWeight.toLowerCase() === "extralight") {
            fontWeight = 200;
          } else if (fontWeight.toLowerCase() === "light") {
            fontWeight = 300;
          } else if (fontWeight.toLowerCase() === "medium") {
            fontWeight = 500;
          } else if (fontWeight.toLowerCase() === "semibold") {
            fontWeight = 600;
          } else if (fontWeight.toLowerCase() === "bold") {
            fontWeight = 700;
          } else if (fontWeight.toLowerCase() === "extrabold" || fontWeight.toLowerCase() === "heavy") {
            fontWeight = 800;
          } else if (fontWeight.toLowerCase() === "black") {
            fontWeight = 900;
          } else {
            fontWeight = 400;
          }
          fs.appendFile(
            fontsFile,
            `@font-face {
                    font-family: "${fontName}";
                    font-display: swap;
                    src: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");
                    font-weight: ${fontWeight};
                    font-style: normal;
                    }\r\n`,
            cb
          );
          newFileOnly = fontFileName;
        }
      }
    } else {
      // Если файл есть, выводим сообщение
      console.log("Файл scss/fonts.scss уже существует. Для обновления файла нужноего удалить");
    }
  }
});

function cb() {}
