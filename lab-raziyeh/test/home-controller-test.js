'use strict';

describe('Testing HomeController', function(){
  beforeEach(() => {
    angular.mock.module('profile');
    angular.mock.inject( $controller => {
      this.homeCtrl = new $controller('HomeController');
    });
  });

  it('should return title', () => {
    let expectedResult = 'Home';
    expect(this.homeCtrl.title).toBe(expectedResult);
  });
});