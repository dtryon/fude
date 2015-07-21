'use strict';

var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Shopper = require('../../src/components/shopper'); 

describe('shopper', function () {
  it('renders without problems', function () {
    var shopper = TestUtils.renderIntoDocument(<Shopper/>);
    expect(shopper).not.toBeUndefined();
  });
});