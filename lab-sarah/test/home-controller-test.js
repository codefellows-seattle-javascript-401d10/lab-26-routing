'use strict';

describe('testing homeCtrl', function() {
  beforeEach(() => {
    angular.mock.module('sarahgram');
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('HomeController');
    });
  });

  it('should return the home title', () => {
    expect(this.homeCtrl.title).toEqual('Home');
  });
});
