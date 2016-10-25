'use strict';

describe('Testing SignupController', function(){
  beforeEach(() => {
    angular.mock.module('profile');
    angular.mock.inject( $controller => {
      this.signupCtrl = new $controller('SignupController');
    });
  });

  it('should return title', () => {
    let expectedResult = 'Signup';
    expect(this.signupCtrl.title).toBe(expectedResult);
  });
});