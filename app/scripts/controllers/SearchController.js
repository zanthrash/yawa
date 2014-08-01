'use strict';

/**
 * @ngdoc function
 * @name yawaApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the yawaApp
 */

function SearchController ($http, $log) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  var self = this;
  self.selectedCity = {};
  self.conditions;

  this.search = function (q) {
    var searchUrl = 'http://autocomplete.wunderground.com/aq';
    return $http.jsonp(searchUrl, {params: {query:q, cb: 'JSON_CALLBACK'}, headers: {"Content-Type": "application/json"} })
      .then ( function (response) {
        $log.debug(response.data);
        return response.data.RESULTS;
      })
  };

  this.fetchCityWeather = function () {
    var fetchUrl = 'http://api.wunderground.com/api/a578445f30e79230/conditions' + this.selectedCity.l + '.json';
    return $http.jsonp(fetchUrl, {params: {callback: 'JSON_CALLBACK'}, headers: {"Content-Type": "application/json"}})
      .then( function (response) {
        self.conditions = response.data.current_observation;
        $log.debug(response.data);
    });

  }
}

angular.module('search.controller', ['mgcrea.ngStrap'])
  .controller('SearchCtrl', SearchController);
