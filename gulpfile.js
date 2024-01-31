const gulp = require('gulp');
const ejs = require('gulp-ejs');

function build() {
    return gulp.src('views/*.ejs')
        .pipe(ejs())
        .pipe(gulp.dest('dist'));
}

exports.build = build;
