angular.module('app', ['ngResource', 'ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: '/partials/main',
        controller: 'MainCtrl'
      });
  });