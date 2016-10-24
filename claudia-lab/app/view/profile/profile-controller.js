'use strict';

require('./profile.scss');

module.exports = ['$log', ProfileController];

function ProfileController($log){
  $log.debug('init profileCtrl');
}
