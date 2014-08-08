'use strict';

describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('search.controller'));

  var SearchCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    SearchCtrl = $controller('SearchCtrl');
  }));

  describe('calling search with a query', function () {

    var CitySearchService;
    beforeEach(inject(function (_CitySearchService_) {
      CitySearchService = _CitySearchService_
      spyOn(CitySearchService, 'findCityInfo').andReturn({});
    }));

    it('should call through to the CitySearchService', function () {
      SearchCtrl.search('Minneapolis');
      expect(CitySearchService.findCityInfo).toHaveBeenCalledWith('Minneapolis')
    });
  });


  describe('calling fetchCityWeather with a selectedCity', function () {

    var WeatherFetchingService;

    beforeEach(inject(function (_WeatherFetchingService_) {
      WeatherFetchingService = _WeatherFetchingService_;
      spyOn(WeatherFetchingService, 'findConditions')
    }));

    it('should call to the WeatherFetchingService when the selectedCity is set', function () {
      SearchCtrl.selectedCity = {l: '/q/zwt:9999'}
      SearchCtrl.fetchCityWeather()

      expect(WeatherFetchingService.findConditions).toHaveBeenCalledWith(SearchCtrl.selectedCity)
    });
  });
});
