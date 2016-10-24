'use strict';

//require scss
require('./scss/main.scss');

// non angular npm modules
const path = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');

//angular
const angular = require('angular');

//require 3rd party angular modules
const uiRouter = require('angular-ui-router');

const judy = angular.module('judy', [uiRouter]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => {
  judy.config(context(key));
});

//load view controllers in ./view,
context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => {
  let name = pascalcase(path.basename(key, '.js'));
  console.log('name: ', name);
  judy.controller(name, context(key));
});
