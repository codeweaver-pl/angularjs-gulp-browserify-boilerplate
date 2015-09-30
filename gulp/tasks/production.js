'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', ['clean'], function(cb) {

  cb = cb || function() {};

  global.release = true;

  runSequence(['styles', 'images', 'fonts', 'views', 'browserify'], 'gzip', cb);
});
