
'use strict';

require('./signup.scss');

module.exports = ['$log', SignupController];
function SignupController($log){
  $log.debug('init signupCtrl');
  this.title = 'Congrats you have made it to the signup page of make believe';
}
