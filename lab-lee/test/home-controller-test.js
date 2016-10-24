'use strict';

describe('testing homeCtrl', function() {

  beforeEach(() => {
    angular.mock.module('leegram');
    angular.mock.inject( $controller => {
      this.homeCtrl = new $controller('HomeController');
    });
  });

  describe('testing initial properties', () => {

    it('should have the correct title', () => {
      let expectedResult = 'Home Title';
      expect(this.homeCtrl.title).toBe(expectedResult);
    });
  });
});
