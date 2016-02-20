var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');
    browserSync = require('browser-sync');

gulp.task('less', function() {
    gulp.src('public/stylesheets/*.less')
        .pipe(watch('public/stylesheets/*.less'))
        .pipe(less())
        .pipe(gulp.dest('public/stylesheets/'))
        .pipe(livereload());
});

gulp.task('default', ['less']);


gulp.task('browser-sync', function () {
    var files = [
        'app/**/*.html',
        'app/assets/css/**/*.css',
        'app/assets/imgs/**/*.png',
        'app/assets/js/**/*.js'
    ];

    browserSync.init(files, {
        server: {
            baseDir: './app'
        }
    });
});