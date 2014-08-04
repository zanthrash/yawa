(function () {

  'use strict';

  function SearchController (ApiKey, CitySearchService, WeatherFetchingService) {

    var self = this;
    self.selectedCity = {};
    self.weather = WeatherFetchingService;
    self.apiKey = ApiKey.wu;

    this.search = function (q) {
      return CitySearchService.findCityInfo(q)
    };

    this.fetchCityWeather = function () {
      WeatherFetchingService.findConditions(self.selectedCity);
    }

  }

  angular
    .module('search.controller', ['mgcrea.ngStrap', 'apiKey.value','cityFinder', 'weatherFetching', 'time.filters'])
    .controller('SearchCtrl', SearchController);


})();

