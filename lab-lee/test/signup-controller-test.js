'use strict';

describe('testing signupCtrl', function() {

  beforeEach(() => {
    angular.mock.module('leegram');
    angular.mock.inject( $controller => {
      this.signupCtrl = new $controller('SignupController');
    });
  });

  describe('testing initial properties', () => {

    it('should have the correct title', () => {
      let expectedResult = 'Sign up to join our site!';
      expect(this.signupCtrl.title).toBe(expectedResult);
    });
  });
});
