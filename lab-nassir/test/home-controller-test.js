'use strict';

describe('Testing #HomeController', function() {
  beforeEach(() => {
    angular.mock.module('slugram');
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('HomeController');
    });
  });

  describe('Testing homeCtrl.title', () => {
    it('homeCtrl.title should be set', () => {
      expect(this.homeCtrl.title).toBe('Welcome to the Home page!');
    });
  });
});
