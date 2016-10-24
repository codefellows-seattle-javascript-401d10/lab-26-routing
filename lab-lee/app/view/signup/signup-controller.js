'use strict';

require('./signup.scss');

module.exports = ['$log', signupController];

function SignupController($log) {
  $log.debug('init signupCtrl');
}
