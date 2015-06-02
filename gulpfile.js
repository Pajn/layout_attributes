'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('build', function () {
  var sassOptions = {
    style: 'expanded',
    errLogToConsole: true,
  };

  return gulp.src(['lib/attributes.scss'])
    .pipe($.sass(sassOptions))
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe($.autoprefixer())
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe($.csso())
    .pipe(gulp.dest('dist/'))
    .pipe($.size({ title: 'dist/', showFiles: true }));
});
