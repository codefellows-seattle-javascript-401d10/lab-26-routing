'use strict';

require('./lib/setup.js');

const angular = require('angular');

describe('testing homeCtrl', function() {
  beforeEach(() => {
    angular.mock.module('claudiagram');
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('HomeController');
    });
  });

  describe('testing initial properties', () => {
    it('title should equal "Home"', () => {
      expect(this.homeCtrl.title).toBe('Home');
    });
  });
