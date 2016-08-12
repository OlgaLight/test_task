/**
 * Created by olga on 12.08.16.
 */
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    useref = require('gulp-useref');

gulp.task('css', function(){ // Создаем таск Sass
    return gulp.src('app/styles/**/*.css')
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './app'
        },
        open: true,
        notify: false
    });
});

gulp.task('scripts', function () {
    return gulp.src(
        'app/scripts/**/*.js'
        )
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/scripts'));
});

gulp.task('watch', ['browser-sync', 'scripts', 'css'], function () {
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


gulp.task('default', ['watch', 'browser-sync']);