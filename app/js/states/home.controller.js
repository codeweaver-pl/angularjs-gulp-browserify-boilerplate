'use strict';

require('./module')
  .controller('HomeController', HomeController);

/**
 * @ngInject
 */
function HomeController() {

  var vm = this;
  vm.title = 'Home page';
}