'use strict';

require('./signup.scss');

module.exports = ['$log', SignupController];

function SignupController($log) {
  $log.debug('init signupCtrl;');
  this.title = 'Welcome to the Signup page!';
}
