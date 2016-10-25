'use strict';

// requires scss
require('./scss/main.scss');

// non angular npm modules
const path = require('path');
//const camelcase = require('camelcase');
const pascalcase = require('pascalcase');

// angular
const angular = require('angular');
// require 3rd party angular modules
const uiRouter = require('angular-ui-router');

// create app module
const profile = angular.module('profile', [uiRouter]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => {
  profile.config(context(key));
});

// load view controllers in ./view
context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  profile.controller(name, context(key));
});

// load services 
//context = require.context('./service/', true, /\.js$/);
//context.keys().forEach( key => {
  //let name = camelcase(path.basename(key, '.js'));
  //slugram.service(name, context(key));
//});

//// load components 
//context = require.context('./component/', true, /\.js$/);
//context.keys().forEach( key => {
  //let name = camelcase(path.basename(key, '.js'));
  //slugram.component(name, context(key));
//});




