'use strict';

require('./gallery.scss');

module.exports = ['$log', ProfileController];
function ProfileController($log){
  $log.debug('init profileCtrl');
  this.title = 'Pictured below is her improv group, Spank the Blank.';
}
