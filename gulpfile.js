/**
 * Created by olga on 12.08.16.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    del = require('del'),
    useref = require('gulp-useref');


gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        open: true,
        notify: false
    });
});

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/styles'));
});

gulp.task('scripts', function () {
    return gulp.src(
        'app/scripts/**/*.js'
        )
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/scripts'));
});

gulp.task('watch', ['scripts', 'sass'], function () {
    gulp.watch('app/scss/**/*.scss', browserSync.reload);
    gulp.watch('app/styles/**/*.css', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/scripts/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('useref', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['clean', 'useref'], function () {

    var buildCss = gulp.src('app/styles/style.css')
        .pipe(gulp.dest('dist/styles'));

    var buildJs = gulp.src('app/scripts/app.min.js')
        .pipe(gulp.dest('dist/scripts'));

    var buildHtml = gulp.src('app/partials/*.html')
        .pipe(gulp.dest('dist/partials'));

});


gulp.task('default', ['watch', 'build', 'browserSync']);