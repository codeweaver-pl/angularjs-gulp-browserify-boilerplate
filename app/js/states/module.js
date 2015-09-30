'use strict';

var angular = require('angular');
var bulk = require('bulk-require');
require('./home.tpl.html');

module.exports = angular.module('app.states', []);

bulk(__dirname, ['./**/!(*module).js']);