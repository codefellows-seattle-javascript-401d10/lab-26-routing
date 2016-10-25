'use strict';
//require scss
require('./scss/main.scss');

//non angular npm modules
const path = require('path');
// const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
//angular
const angular = require('angular');

//3rd party angular modules
const uiRouter = require('angular-ui-router');

// create app module
const slugram = angular.module('slugram', [uiRouter]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach( key => {
  slugram.config(context(key));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  slugram.controller(name, context(key));
});

// context = require.context('./services/', true, /\.js$/);
// context.keys().forEach( key => {
//   let name = camelcase(path.basename(key, '.js'));
//   slugram.controller(name, context(key));
// });
