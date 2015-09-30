'use strict';

var config      = require('../config');
var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('views', function () {
  return gulp.src(config.views.src)
    .pipe(gulp.dest(config.dist.root))
    .pipe(browserSync.stream({once: true}));
});