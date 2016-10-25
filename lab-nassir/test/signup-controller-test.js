'use strict';

describe('Testing #SignupController', function() {
  beforeEach(() => {
    angular.mock.module('slugram');
    angular.mock.inject($controller => {
      this.signupCtrl = new $controller('SignupController');
    });
  });

  describe('Testing signupCtrl.title', () => {
    it('signupCtrl.title should be set', () => {
      expect(this.signupCtrl.title).toBe('Welcome to the Signup page!');
    });
  });
});
