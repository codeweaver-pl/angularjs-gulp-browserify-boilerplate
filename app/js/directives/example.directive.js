'use strict';

var _                 = require('lodash'),
    directivesModule  = require('./module'),
    ExampleController = require('./example.controller');

require('./example.tpl.html');

directivesModule
  .directive('exampleDirective', exampleDirective);

/**
 * @ngInject
 */
function exampleDirective() {

  return {
    restrict:     'EA',
    templateUrl:  'example.tpl.html',
    link:         link,
    controller:   ExampleController,
    controllerAs: 'vm'
  };

  function link(scope, element) {
    element.on('click', function () {
      console.log('element clicked: {', _.reduce(scope, function(result, value, key) {
        return result + '\t' + key + ': ' + value + '\n';
      }, '\n'),'}');
    });
  }
}

