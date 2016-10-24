'use strict';

describe('testing galleryCtrl', function(){
  beforeEach( () => {
    angular.mock.module('maxgram');
    angular.mock.inject($controller => {
      this.galleryCtrl = new $controller('GalleryController');
    });
  });

  describe('testing default properties and values', () => {
    it('title should equal Create a gallery!', () => {
      expect(this.galleryCtrl.title).toEqual('Create a gallery!');
    });
  });
});
