'use strict';

describe('testing profileCtrl', function() {
  beforeEach(() => {
    angular.mock.module('claudiagram');
    angular.mock.inject($controller => {
      this.profileCtrl = new $controller('ProfileController');
    });
  });

  describe('testing initial properties', () => {
    it('title should equal "Profile"', () => {
      expect(this.profileCtrl.title).toBe('Profile');
    });
  });
});
