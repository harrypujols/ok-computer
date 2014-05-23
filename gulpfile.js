var gulp = require('gulp'),
    sass = require('gulp-sass'),
    neat = require('node-neat').includePaths,
    deploy = require('gulp-gh-pages');

// --- Styles ---
gulp.task('styles', function () {
    return gulp.src('./site/sass/*.scss')
        .pipe(sass({
            includePaths: ['./site/sass'].concat(neat)
        }))
        .pipe(gulp.dest('./site/css'));
});

// --- Deploy pages ---
gulp.task('deploy', function () {
    gulp.src('./site/**/*')
        .pipe(deploy(
          'https://github.com/harrypujols/ok-computer', 
          'origin'
        ));
});

gulp.task('default', ['styles']);
