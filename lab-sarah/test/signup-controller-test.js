'use strict';

describe('testing signupCtrl', function() {
  beforeEach(() => {
    angular.mock.module('sarahgram');
    angular.mock.inject($controller => {
      this.signupCtrl = new $controller('SignupController');
    });
  });

  it('should return the signup title', () => {
    expect(this.signupCtrl.title).toEqual('Sign-up');
  });
});
