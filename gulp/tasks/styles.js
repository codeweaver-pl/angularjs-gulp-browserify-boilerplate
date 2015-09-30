'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var sourcemaps   = require('gulp-sourcemaps');
var sass         = require('gulp-sass');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {

  var createSourcemap = !global.release || config.styles.prodSourcemap;

  return gulp.src(config.styles.src)
    .pipe(gulpif(createSourcemap, sourcemaps.init()))
    .pipe(sass({
      sourceComments: !global.release,
      outputStyle:    global.release ? 'compressed' : 'nested',
      includePaths:   config.styles.sassIncludePaths
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe(gulpif(createSourcemap, sourcemaps.write(global.release ? './' : null)))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.stream({once: true}));

});
