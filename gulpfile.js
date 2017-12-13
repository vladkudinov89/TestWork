var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    concatCss = require('gulp-concat-css');

gulp.task('browser-sync', ['styles', 'scripts'], function () {
    browserSync.init({

            open: true,
            proxy: "http://localhost/TestWork/app",
            port: 80,
            notify: false
    });
});

gulp.task('styles', function () {
    return gulp.src([
        'sass/*.sass',
        'sass/*.sass',
        './app/libs/bootstrap/dist/css/bootstrap.min.css',
        /*'./app/libs/fontawesome/css/font-awesome.min.css'*/
    ])
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        }).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
        .pipe(concatCss("main.css"))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(cleanCSS())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function () {
    return gulp.src([
        /*'./app/libs/modernizr/modernizr.js',*/
        './app/libs/jquery/dist/jquery.min.js',
        './app/libs/bootstrap/dist/js/bootstrap.min.js'
    ])
        .pipe(concat('libs.js'))
        // .pipe(uglify()) //Minify libs.js
        .pipe(gulp.dest('./app/js/'));
});

gulp.task('watch', function () {
    gulp.watch('sass/*.sass', ['styles']);
    gulp.watch('app/libs/**/*.js', ['scripts']);
    gulp.watch('app/js/*.js').on("change", browserSync.reload);
    //gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/*.php').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
