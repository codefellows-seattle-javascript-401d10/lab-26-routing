'use strict';

describe('testing signupCtrl', function(){
  beforeEach( () => {
    angular.mock.module('maxgram');
    angular.mock.inject($controller => {
      this.signupCtrl = new $controller('SignupController');
    });
  });

  describe('testing default properties and values', () => {
    it('title should equal Signup for my service', () => {
      expect(this.signupCtrl.title).toEqual('Signup for my service');
    });
  });
});
