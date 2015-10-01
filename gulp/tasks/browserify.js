'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var gutil        = require('gulp-util');
var source       = require('vinyl-source-stream');
var sourcemaps   = require('gulp-sourcemaps');
var buffer       = require('vinyl-buffer');
var streamify    = require('gulp-streamify');
var watchify     = require('watchify');
var browserify   = require('browserify');
var uglify       = require('gulp-uglify');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var ngAnnotate   = require('browserify-ngannotate');
var ngHtml2Js    = require("browserify-ng-html2js");

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
gulp.task('browserify', function () {

    /** @type Browserify */
    var bundler = browserify({
      entries:      config.browserify.entries,
      debug:        true,
      cache:        {},
      packageCache: {},
      fullPaths:    !global.release
    });

    if (!global.release) {
      bundler = watchify(bundler);
      bundler.on('update', function () {
        rebundle();
      });
    }

    var transforms = [
      {'name': ngAnnotate, 'options': {}},
      {
        'name':      ngHtml2Js({
          prefix:         '',
          module:         'templates',
          extension:      'tpl.html',
          requireAngular: true
        }), options: {}
      },
      {'name': 'brfs', 'options': {}},
      {'name': 'bulkify', 'options': {}}
    ];

    transforms.forEach(function (transform) {
      bundler.transform(transform.name);
    });

    function rebundle() {
      var stream          = bundler.bundle();
      var createSourcemap = global.release && config.browserify.prodSourcemap;

      gutil.log('Rebundle...');

      return stream.on('error', handleErrors)
        .pipe(source('main.js'))
        .pipe(gulpif(createSourcemap, buffer()))
        .pipe(gulpif(createSourcemap, sourcemaps.init()))
        .pipe(gulpif(global.release, streamify(uglify({
          compress: {drop_console: true}
        }))))
        .pipe(gulpif(createSourcemap, sourcemaps.write('./')))
        .pipe(gulp.dest(config.scripts.dest))
        .pipe(browserSync.stream({once: true}));
    }

    return rebundle();
  }
);
