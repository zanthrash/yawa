'use strict';


function RoutingConfig ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../views/search.html',
      controller: 'SearchCtrl',
      controllerAs: 'search'
    })
    .when('/api', {
      templateUrl: '../views/apiKey.html',
      controller: 'ApiKeyCtrl',
      controllerAs: 'api'
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
    'search.controller',
    'apiKey.controller'

  ])
  .config(RoutingConfig);
