'use strict';

describe('testing galleryCtrl', function(){
  beforeEach(() => {
    angular.mock.module('lizzieApp');
    angular.mock.inject($controller => {
      this.galleryCtrl = new $controller('GalleryController');
    });
  });

  describe('testing initial properties', () => {
    it('should have the title "Here are some pictures!"', () => {
      expect(this.galleryCtrl.title).toBe('Here are some pictures!');
    });
  });
});
