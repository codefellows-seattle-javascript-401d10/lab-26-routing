'use strict';

describe('Testing #GalleryController', function() {
  beforeEach(() => {
    angular.mock.module('slugram');
    angular.mock.inject($controller => {
      this.galleryCtrl = new $controller('GalleryController');
    });
  });

  describe('Testing galleryCtrl.title', () => {
    it('galleryCtrl.title should be set', () => {
      expect(this.galleryCtrl.title).toBe('Welcome to the Gallery page!');
    });
  });
});
