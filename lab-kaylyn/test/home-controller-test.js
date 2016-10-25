'use strict';

describe('testing homeCtrl', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');

    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('HomeController');
    });
  });
  describe('testing initial properties', () => {
    it('title should be homeCtrl.title', () => {
      expect(this.homeCtrl.title).toEqual('Welcome to the most boring home page you have likely ever seen :)');
    });
  });
});
