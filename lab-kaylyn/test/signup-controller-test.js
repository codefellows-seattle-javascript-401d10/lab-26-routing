'use strict';

describe('testing signupCtrl', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');

    angular.mock.inject($controller => {
      this.signupCtrl = new $controller('SignupController');
    });
  });
  describe('testing initial properties', () => {
    it('title should be signupCtrl.title', () => {
      expect(this.signupCtrl.title).toEqual('Congrats you have made it to the signup page of make believe');
    });
  });
});
