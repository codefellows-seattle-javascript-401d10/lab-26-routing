'use strict';

//require home.scss file
require('./home.scss');

//export one array, which will become require.context, the thing injected into entry.js file, so whole app can have access to it
module.exports = ['$log', HomeController];

function HomeController($log){
  $log.debug('init homeCtrl');
  this.title = 'Home';
}
