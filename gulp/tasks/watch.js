'use strict';

var config = require('../config');
var gulp   = require('gulp');

gulp.task('watch', [
  'browserSync',
  'server'
], function () {
  gulp.watch(config.scripts.src, ['lint']);
  gulp.watch(config.styles.src, ['styles']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.views.src, ['views']);
});