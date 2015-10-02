'use strict';

var istanbul = require('browserify-istanbul'),
    ngAnnotate = require('browserify-ngannotate'),
ngHtml2Js = require("browserify-ng-html2js");

module.exports = function(config) {

  config.set({

    basePath: '../',
    frameworks: ['mocha', 'chai', 'browserify'],
    preprocessors: {
      'app/js/**/*.js': ['browserify', 'babel', 'coverage']
    },
    browsers: ['Chrome'],
    reporters: ['progress', 'coverage'],

    autoWatch: true,

    browserify: {
      debug: true,
      transform: [
        ngAnnotate,
        ngHtml2Js,
        'bulkify',
        istanbul({
          ignore: ['**/node_modules/**', '**/test/**']
        })
      ]
    },

    proxies: {
      '/': 'http://localhost:9876/'
    },

    urlRoot: '/__karma__/',

    files: [
      // app-specific code
      'app/js/main.js',

      // 3rd-party resources
      'node_modules/angular-mocks/angular-mocks.js',

      // test files
      'test/unit/**/*.js'
    ]

  });

};
