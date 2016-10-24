'use strict';

require('./home.scss');
module.exports = ['$log', HomeController];

function HomeController($log) {
  $log.debug('init HomeController;');
  this.title = 'Welcome to the Home page!';
}
