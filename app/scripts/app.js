'use strict';


function RoutingConfig ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../views/search.html',
      controller: 'SearchCtrl',
      controllerAs: 'search'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}

angular
  .module('yawaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'search.controller'
  ])
  .config(RoutingConfig);
