'use strict';

describe('testing galleryCtrl', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');

    angular.mock.inject($controller => {
      this.galleryCtrl = new $controller('GalleryController');
    });
  });
  describe('testing initial properties', () => {
    it('title should be galleryCtrl.title', () => {
      expect(this.galleryCtrl.title).toEqual('Welcome to the gallery of nothingness');
    });
  });
});
