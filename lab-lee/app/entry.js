'use strict';

// build sass
require('./scss/main.scss');

// require node modules
const path = require('path');

// require npm modules
const angular = require('angular');
// const camelcase = require('camelcase');
const pascalcase = require('pascalcase');

// require angualr modules
// const ngTouch = require('angular-touch');
// const ngAnimate = require('angular-animate');
const uiRouter = require('angular-ui-router');
// const uiBootstrap = require('angular-ui-bootstrap');

// create angular module
const leegram = angular.module('leegram', [uiRouter]);

// load config
let context = require.context('./config/', true, /.js$/);
context.keys().forEach( key => {
  leegram.config(context(key));
});

// load view controllers
context = require.context('./view/', true, /.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  leegram.controller(name, context(key));
});

// load services
// context = require.context('./service/', true, /.js$/);
// context.keys().forEach( key => {
//   let name = camelcase(path.basename(key, '.js'));
//   leegram.service(name, context(key));
// });
//
// // load components
// context = require.context('./component/', true, /.js$/);
// context.keys().forEach( key => {
//   let name = camelcase(path.basename(key, '.js'));
//   console.log('loading component', name);
//   leegram.component(name, context(key));
// });
