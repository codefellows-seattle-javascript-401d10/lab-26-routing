'use strict';

describe('testing galleryCtrl', function() {

  beforeEach(() => {
    angular.mock.module('leegram');
    angular.mock.inject( $controller => {
      this.galleryCtrl = new $controller('GalleryController');
    });
  });

  describe('testing initial properties', () => {

    it('should have the correct title', () => {
      let expectedResult = 'Welcome to the Gallery!';
      expect(this.galleryCtrl.title).toBe(expectedResult);
    });
  });
});
