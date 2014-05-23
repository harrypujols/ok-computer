var gulp = require('gulp'),
    sass = require('gulp-sass'),
    neat = require('node-neat').includePaths,
    deploy = require('gulp-gh-pages');

var paths = {
    scss: './site/sass/*.scss'
};

// --- Styles ---
gulp.task('styles', function () {
    return gulp.src(paths.scss)
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }))
        .pipe(gulp.dest('./site/css'));
});

// --- Deploy ---
gulp.task('deploy', function () {
    gulp.src('./site/**/*')
        .pipe(deploy('https://github.com/harrypujols/ok-computer', 'origin'));
});

gulp.task('default', ['styles']);
