'use strict';

ddescribe('Service: CitySearchService', function () {

  // load the service's module
  beforeEach(module('cityFinder'));

  var CitySearchService;

  describe('using with out setting', function () {

    beforeEach(
      inject(function (_CitySearchService_) {
        CitySearchService = _CitySearchService_;
    }));

    it('should have the service injected', function () {
      expect(CitySearchService).toBeDefined();
    });

    it('should have the search url unset', function () {
      expect(CitySearchService.searchURL).toBeNull();
    });
  });

  describe('using with setting the url', function () {

    var url;
    var $httpBackend;
    var $log;

    // This beforeEach is to set up the config of the provider
    beforeEach(function() {
      angular
        .module('mockApp', [])
        .config(function (CitySearchServiceProvider) {
          url = 'http://search.com';
          CitySearchServiceProvider.setSearchURL(url)
        });

      module('mockApp');

      inject( function (_$httpBackend_, _$log_,_CitySearchService_) {
        $httpBackend = _$httpBackend_;
        $log = _$log_;
        CitySearchService = _CitySearchService_;
      });
    });

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });


    it('should have the configured url', function () {
      expect(CitySearchService.searchURL).toBe(url)
    });

    it('should successfully call the url with a query string via JSONP', function () {
      spyOn($log, 'debug');

      var queryString = 'Minneapolis';
      var expectedCall = url + "?cb=JSON_CALLBACK&query=" + queryString
      var expectedResults = {'RESULTS': {'foo': 2}};

      $httpBackend.expectJSONP(expectedCall).respond(function () {
        return [200, expectedResults]
      });

      CitySearchService.findCityInfo(queryString).then(function (results) {
        expect(results).toEqual(expectedResults.RESULTS)
        expect($log.debug).toHaveBeenCalled();
      });

      $httpBackend.flush()
    });
  });

});
