/*global browser, by */

'use strict';

describe('E2E: Example', function() {
  var chai = require('chai');
  var chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);
  var expect = chai.expect;

  beforeEach(function() {
    browser.get('/');
    browser.waitForAngular();
  });

  it('should route correctly', function() {
    expect(browser.getLocationAbsUrl()).to.eventually.equal('/');
  });

  it('should show the number defined in the controller', function() {
    var button = element(by.id('a-fancy-button'));
    button.click();
    button.click();
    var span = element(by.id('hardcore-span'));
    expect(span.getText()).to.eventually.equal('clicks: 2');
  });

});