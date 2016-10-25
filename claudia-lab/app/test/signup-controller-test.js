'use strict';

require('./lib/setup.js');

const angular = require('angular');

describe('testing signupCtrl', function() {
  beforeEach(() => {
    angular.mock.module('claudiagram');
    angular.mock.inject($controller => {
      this.signupCtrl = new $controller('SignupController');
    });
  });

  describe('testing initial properties', () => {
    it('title should equal "signup"', () => {
      expect(this.signupCtrl.title).toBe('signup');
    });
  });
