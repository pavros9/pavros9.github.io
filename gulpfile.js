var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

function style () {
    return gulp.src("./scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream())
}
function watch () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
    gulp.watch("./scss/**/*.scss", style);
    gulp.watch("./*.html").on('change', browserSync.reload);

}
exports.style = style;
exports.watch = watch;

