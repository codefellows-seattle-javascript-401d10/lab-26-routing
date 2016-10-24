'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider',routerConfig ];
function routerConfig ($stateProvider, $urlRouterProvider){
  $stateProvider

  .state('home', {
    url: '/home',
    template: require('../view/home/home.html'), controller: 'HomeController',
  })

  .state('signup', {
    url: '/signup',
    template: require('../view/signup/signup.html'), controller: 'SignupController',
  })

  .state('gallery', {
    url: '/gallery',
    template: require('../view/gallery/gallery.html'), controller: 'GalleryController',
  });

  $urlRouterProvider.otherwise('/');
}