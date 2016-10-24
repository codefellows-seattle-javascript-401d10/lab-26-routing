'use strict';

require('./home.scss');

module.exports = ['$log', HomeController];

function HomeController($log){
  $log.debug('init homeCtrl');
  this.title = 'The homepage. Take yo\' nasty shoes off.';
}
