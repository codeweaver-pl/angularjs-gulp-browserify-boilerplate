'use strict';

var gulp   = require('gulp');
var karma  = require('gulp-karma');
var config = require('../config');

gulp.task('unit', ['views'], function () {

  return gulp.src(config.test.karmaWorkaround)
    .pipe(karma({
      configFile: config.test.karma,
      action:     'run'
    }))
    .on('error', function (err) {
      throw err;
    });
});