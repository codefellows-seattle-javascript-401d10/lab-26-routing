'use strict';

describe('testing galleryCtrl', function() {
  beforeEach(() => {
    angular.mock.module('sarahgram');
    angular.mock.inject($controller => {
      this.galleryCtrl = new $controller('GalleryController');
    });
  });

  it('should return the gallery title', () => {
    expect(this.galleryCtrl.title).toEqual('Gallery');
  });
});
