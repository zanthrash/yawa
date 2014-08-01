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

function CORSConfig ($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  delete $httpProvider.defaults.headers.common['X-Request-With'];
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
