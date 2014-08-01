'use strict';

/**
 * @ngdoc function
 * @name yawaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yawaApp
 */
angular.module('yawaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
