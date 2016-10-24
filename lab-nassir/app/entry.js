'use strict';

require('./scss/main.scss');

const path = require('path');
const pascalcase = require('pascalcase');
const camelcase = require('camelcase');

const angular = require('angular');

const uiRouter = require('angular-ui-router');

const slugram = angular.module('slugram', [uiRouter]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => {
  slugram.config(context(key));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => {
  let name = pascalcase(path.basename(key, '.js'));
  slugram.controller(name, context(key));
});

context = require.context('./service/', true, /\.js$/);
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));
  slugram.service(name, context(key));
});

context = require.context('./component/', true, /\.js$/);
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));
  slugram.component(name, context(key));
});
