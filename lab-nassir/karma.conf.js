process.env.NODE_ENV = 'testing';
process.env.API_URL = 'http://test.sluggram.com'; //delibrately fake for test reasons
const webpack = require('./webpack.config.js');
webpack.entry = {};


module.exports = function(config) {
  config.set({

    webpack,
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'app/entry.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'test**/*-test.js',
    ],
    exclude: [
    ],
    preprocessors: {
      'app/entry.js': ['webpack'],
      'test**/*-test.js': ['webpack'],
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
  });
};
