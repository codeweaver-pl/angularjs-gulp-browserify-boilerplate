'use strict';

module.exports = {

  browserPort: 3000,
  UIPort:      3001,
  serverPort:  3002,

  styles: {
    src:              'app/styles/**/*.scss',
    dest:             'build/css',
    prodSourcemap:    false,
    sassIncludePaths: []
  },

  scripts: {
    src:  'app/js/**/*.js',
    dest: 'build/js'
  },

  images: {
    src:  'app/images/**/*',
    dest: 'build/images'
  },

  views: {
    src: 'app/index.html'
  },

  gzip: {
    src:     'build/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest:    'build/',
    options: {}
  },

  dist: {
    root: 'build'
  },

  browserify: {
    entries:       ['./app/js/main.js'],
    bundleName:    'main.js',
    prodSourcemap: false
  },

  test: {
    src:             'test/**/*_spec.js',
    karma:           'test/karma.conf.js',
    protractor:      'test/protractor.conf.js',
    karmaWorkaround: './github.com/lazd/gulp-karma/issues/9'
  }

};
