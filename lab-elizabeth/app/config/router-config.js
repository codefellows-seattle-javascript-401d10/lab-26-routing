'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('' , '/home');

  let states = [
    {
      name: 'home',
      url: '/home',
      controllerAs: 'homeCtrl',
      controller: 'HomeController',
      template: require('../view/home/home.html'),
    },
    {
      name: 'signup',
      url: '/signup',
      controllerAs: 'signupCtrl',
      controller: 'SignupController',
      template: require('../view/signup/signup.html'),
    },
    {
      name: 'gallery',
      url: '/gallery',
      controllerAs: 'galleryCtrl',
      controller: 'GalleryController',
      template: require('../view/gallery/gallery.html'),
    },
  ];

  states.forEach(state => {
    $stateProvider.state(state);
  });
}
