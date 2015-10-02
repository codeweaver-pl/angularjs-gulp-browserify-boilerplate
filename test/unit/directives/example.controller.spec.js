'use strict';

  var expect = chai.expect;

  describe('ExampleController', function () {

    var $controller;

    beforeEach(module('app.directives'));

    beforeEach(inject(function (_$controller_) {
      $controller = _$controller_;
    }));

    describe('#onClick', function () {

      it('should increment spanClicks', function () {

        //given
        var ctrl = $controller('ExampleController');

        expect(ctrl.spanClicks).to.equal(0);

        //when
        ctrl.onClick();

        //then
        expect(ctrl.spanClicks).to.equal(1);
      });
    });
  });
