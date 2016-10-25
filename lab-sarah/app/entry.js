'use strict';

require('./scss/main.scss');

//non angular npm modules
const path = require('path');
//modules that will automatically
// const camelcase = require('camelcase');
const pascalcase = require('pascalcase');

const angular = require('angular');
//require 3rd party angular modules
//uiRouter is a collection of components, services, etc. that somebody else wrote, and you just require it in and then you have access to everything
const uiRouter = require('angular-ui-router');

//create app module
//create the app called saragram, and inject the uiRouter into it
const sarahgram = angular.module('sarahgram', [uiRouter]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => {
  //for each of the keys (aka filepaths), add the contents of that file to sarahgram config, where .config is a built in angular method
  sarahgram.config(context(key));
});

//load view controllers in ./view
context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => {
  //reformat the name to be pascal case, then register the contents of the file as a controller on the app
  let name = pascalcase(path.basename(key, '.js'));
  sarahgram.controller(name, context(key));
});

//load services
// context= require.context('./service/', true, /\.js$/);
// context.keys().forEach(key => {
//   let name = camelcase(path.basename(key, '.js'));
//   sarahgram.service(name, context(key));
// });

// load components
// context = require.context('./component/', true, /\.js$/);
// context.keys().forEach( key => {
//   let name = camelcase(path.basename(key, '.js'));
//   sarahgram.component(name, context(key));
// });
