'use strict';

var angular = require('angular');

module.exports = angular.module('app.services', []);

var b = require('bulk-require');
b(__dirname, ['./**/!(*_index|*.spec).js']);