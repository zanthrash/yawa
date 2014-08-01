'use strict';

/**
 * @ngdoc function
 * @name yawaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yawaApp
 */
angular.module('yawaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
