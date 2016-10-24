'use strict';


describe('testing homeCtrl', function(){
  beforeEach(() => {
    angular.mock.module('judy');
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('HomeController');
    });
  });

  describe('testing initial properties', () => {

    it('should have a title equal to whatever long thing I made it to be', () => {
      expect(this.homeCtrl.title).toBe('The homepage. Take yo\' nasty shoes off.');
    });
  });
});
