'use strict';

var angular = require('angular');
var bulk = require('bulk-require');

module.exports = angular.module('app.directives', ['templates']);

bulk(__dirname, ['./**/!(*module).js']);