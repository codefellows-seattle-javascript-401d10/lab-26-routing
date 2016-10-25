'use strict';

//an array of things you need to inject
module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

//stateProvider and urlRouterProvider
function routerConfig($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('/', '/#/home');
  $urlRouterProvider.when('/hello', '/#/home');

  let routes = [
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      //the constructor
      controller: 'HomeController',
      //the instance
      controllerAs: 'homeCtrl',
    },
    {
      name: 'signup',
      url: '/signup',
      template: require('../view/signup/signup.html'),
      controller: 'SignupController',
      controllerAs: 'signupCtrl',
    },
    {
      name: 'gallery',
      url: '/gallery',
      template: require('../view/gallery/gallery.html'),
      controller: 'GalleryController',
      controllerAs: 'galleryCtrl',
    },
  ];

  routes.forEach( route => {
    $stateProvider.state(route);
  });
}
