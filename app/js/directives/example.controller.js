'use strict';

var directivesModule = require('./module');

directivesModule
  .controller('ExampleController', ExampleController);

/**
 * @ngInject
 */
function ExampleController() {

  var vm = this;

  vm.spanClicks = 0;
  vm.onClick = onClick;

  function onClick() {
    vm.spanClicks++;
  }
}

module.exports = ExampleController;