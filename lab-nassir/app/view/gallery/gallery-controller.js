'use strict';

require('./gallery.scss');
module.exports = ['$log', GalleryController];

function GalleryController($log) {
  $log.debug('init GalleryController;');
  this.title = 'Welcome to the Gallery page!';
}
