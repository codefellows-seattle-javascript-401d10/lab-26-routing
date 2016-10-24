'use strict';

require('./home.scss');

module.exports = ['$log', HomeController];

function HomeController($log){
  $log.debug('init homeCtrl');

  this.title = 'Welcome to Home';
}
