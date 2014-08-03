(function () {
  'use strict';

  function CitySearchDirective () {
    return {
      template: [
        '<p>',
          '<input type="text" class="form-control" ng-model="search.selectedCity" data-animation="am-flip-x" ng-options="city as city.name for city in search.search($viewValue)" placeholder="Enter city" bs-typeahead>',
        '</p>',
        '<p ng-if="search.apiKey">',
          '<button class="btn btn-primary" ng-click="search.fetchCityWeather()">Get Weather</button>',
        '</p>',
        '<p ng-if="!search.apiKey">Please set the API Key</p>'
      ].join(''),
      restrict: 'E',
      controller: 'SearchCtrl',
      controllerAs: 'search',
      link: function postLink(scope, element, attrs) {
      }
    };

  }

  angular
    .module('citySearch', ['search.controller'])
    .directive('citySearch', CitySearchDirective);

})();

