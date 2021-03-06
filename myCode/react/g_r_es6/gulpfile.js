var gulp = require('gulp');
var react = require('gulp-react');
var babel = require('gulp-babel');
var open = require('gulp-open');

gulp.task('transform', function () {
      return gulp.src('*.jsx').pipe(react({ harmony: false, es6module: true })).pipe(gulp.dest('.'));
});

gulp.task('es6', ['transform'], function () {
      return gulp.src('./*.js').pipe(babel()).pipe(gulp.dest('.'));
});

gulp.task('build', ['es6'], function () {
      return gulp.src('./index.html').pipe(open(), { app: 'google-chrome' });
});