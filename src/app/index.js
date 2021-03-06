'use strict';

angular.module('fend14Veqa1', ['ngAnimate', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('/about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl'
      })
      .state('/contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      })
      .state('/showcase', {
        url: '/showcase',
        templateUrl: 'app/showcase/showcase.html',
        controller: 'ShowcaseCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
