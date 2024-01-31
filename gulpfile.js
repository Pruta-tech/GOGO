const gulp = require('gulp');
const ejs = require('gulp-ejs');

function build() {
    // Copy everything to dist directory
    return gulp.src(['**/*', '!node_modules/**/*']) // Exclude node_modules directory
        .pipe(gulp.dest('dist'));
}

exports.build = build;
