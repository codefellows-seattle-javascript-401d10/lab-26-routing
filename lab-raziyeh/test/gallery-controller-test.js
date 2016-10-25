'use strict';

describe('Testing GalleryController', function(){
  beforeEach(() => {
    angular.mock.module('profile');
    angular.mock.inject( $controller => {
      this.galleryCtrl = new $controller('GalleryController');
    });
  });

  it('should return title', () => {
    let expectedResult = 'Gallery';
    expect(this.galleryCtrl.title).toBe(expectedResult);
  });
});