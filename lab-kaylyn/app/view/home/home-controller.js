'use strict';

require('./home.scss');

module.exports = ['$log', HomeController];

function HomeController($log){
  $log.debug('init homeCtrl');
  this.title = 'Welcome to the most boring home page you have likely ever seen :)';
}
