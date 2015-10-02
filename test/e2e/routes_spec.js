/*global browser */

'use strict';

describe('E2E: Routes', function() {


  var chai = require('chai');
  var chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);
  var expect = chai.expect;
  it('should have a working home route', function() {
    browser.get('#/');
    expect(browser.getLocationAbsUrl()).to.eventually.equal('/');
  });

});