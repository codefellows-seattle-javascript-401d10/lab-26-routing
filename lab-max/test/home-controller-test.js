'use strict';

describe('testing homeCtrl', function(){
  beforeEach( () => {
    angular.mock.module('maxgram');
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('HomeController');
    });
  });

  describe('testing default properties and values', () => {
    it('title should equal Welcome to Home', () => {
      expect(this.homeCtrl.title).toEqual('Welcome to Home');
    });
  });
});
