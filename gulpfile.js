const gulp = require('gulp');
const ejs = require('gulp-ejs');

function compileEJS() {
    return gulp.src('src/templates/*.ejs')
        .pipe(ejs())
        .pipe(gulp.dest('dist'));
}

exports.default = compileEJS;
