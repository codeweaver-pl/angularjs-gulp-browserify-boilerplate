'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function (cb) {

  cb = cb || function () { };

  global.release = false;

  runSequence(['styles', 'images', 'views', 'browserify'], 'watch', cb);
});