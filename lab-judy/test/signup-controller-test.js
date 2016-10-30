'use strict';


describe('testing signupCtrl', function(){
  beforeEach(() => {
    angular.mock.module('judy');
    angular.mock.inject($controller => {
      this.signupCtrl = new $controller('SignupController');
    });
  });

  describe('testing initial properties', () => {

    it('should have a title equal to whatever long thing I made it to be', () => {
      expect(this.signupCtrl.title).toBe('Sign the hell up!');
    });
  });
});
