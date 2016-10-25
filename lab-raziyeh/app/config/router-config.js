'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider',routerConfig ];
function routerConfig ($stateProvider, $urlRouterProvider){
  $stateProvider

  .state('home', {
    url: '/home',
    template: require('../view/home/home.html'), controller: 'HomeController', controllerAs:'homeCtrl', 
  })

  .state('signup', {
    url: '/signup',
    template: require('../view/signup/signup.html'), controller: 'SignupController',controllerAs:'signupCtrl',
  })

  .state('gallery', {
    url: '/gallery',
    template: require('../view/gallery/gallery.html'), controllerAs:'galleryCtrl',
  });

  $urlRouterProvider.otherwise('/');
}