'use strict';

require('./scss/base.scss');

// non angular npm modules
const path = require('path');
const pascalcase = require('pascalcase');
// const camelcase = require('camelcase');

// angular
const angular = require('angular');
// require 3rd party angular modules
const uiRouter = require('angular-ui-router');
// create app module
const maxgram = angular.module('maxgram', [uiRouter]);

// load config
let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => {
  maxgram.config(context(key));
});

// load view controllers in ./view
context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => {
  let name = pascalcase(path.basename(key, '.js'));
  maxgram.controller(name, context(key));
});

// load services
// context = require.context('./service/', true, /\.js$/);
// context.keys().forEach( key => {
//   let name = camelcase(path.basename(key, '.js'));
//   maxgram.service(name, context(key));
// });
//
// // load components
// context = require.context('./component/', true, /\.js$/);
// context.keys().forEach( key => {
//   let name = camelcase(path.basename(key, '.js'));
//   maxgram.component(name, context(key));
// });
