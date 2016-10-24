'use strict';


describe('testing galleryCtrl', function(){
  beforeEach(() => {
    angular.mock.module('judy');
    angular.mock.inject($controller => {
      this.galleryCtrl = new $controller('GalleryController');
    });
  });

  describe('testing initial properties', () => {

    it('should have a title equal to whatever long thing I made it to be', () => {
      expect(this.galleryCtrl.title).toBe('Pictured below is her improv group, Spank the Blank.');
    });
  });
});
