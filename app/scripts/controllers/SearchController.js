'use strict';

/**
 * @ngdoc function
 * @name yawaApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the yawaApp
 */

function SearchController ($http) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  this.search = function (q) {
    var cities = [];

    cities.push('found: ' + q)
    return cities
  }
}

angular.module('search.controller', ['ui.bootstrap.typeahead'])
  .controller('SearchCtrl', SearchController)
