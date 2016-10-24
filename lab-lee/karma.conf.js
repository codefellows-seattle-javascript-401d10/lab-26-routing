// Karma configuration
// Generated on Mon Oct 24 2016 10:38:16 GMT-0700 (PDT)

process.env.NODE_ENV = 'testing';
process.env.API_URL = 'http://localhost:3000';
const webpack = require('./webpack.config.js');
webpack.entry = {};

module.exports = function(config) {
  config.set({
    webpack,
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'app/entry.js',
      'test/**/*-test.js',
      'node_modules/angular-mocks/angular-mocks.js',
    ],
    preprocessors: {
      'app/entry.js': ['webpack'],
      'test/**/*-test.js': ['webpack'],
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
  });
};
