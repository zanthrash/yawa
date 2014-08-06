'use strict';

ddescribe('Service: WeatherFetchingService', function () {

  // load the service's module
  beforeEach(module('weatherFetching', 'weatherFetchingMocks'));

  // instantiate service
  var WeatherFetchingService;
  var $httpBackend;
  var ApiKey;
  var $log;
  var $window;

  beforeEach(inject(function (_$httpBackend_, _$log_, _$window_,_WeatherFetchingService_, _ApiKey_) {
    $httpBackend = _$httpBackend_;
    $log = _$log_;
    $window = _$window_;

    WeatherFetchingService = _WeatherFetchingService_;
    ApiKey = _ApiKey_;
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest()
  });

  describe('when service is first created', function () {
    it('the service should be defined after injection', function () {
      expect(WeatherFetchingService).toBeDefined();
    });

    it('should have undefined conditions', function () {
      expect(WeatherFetchingService.conditions).toBeUndefined();
      expect($httpBackend).toBeDefined()
    });
  });

  describe('when the findConditions function is successfully called with a selected city', function () {

    var mockResponseData;

    beforeEach(inject(function (JSONPCallService) {

      spyOn($log, 'debug');

      var selectedCity = JSONPCallService.selectedCity;
      var expectedJSONPCall = JSONPCallService.expectedCall;
      mockResponseData = JSONPCallService.mockResponse;

      $httpBackend.expect('JSONP', expectedJSONPCall).respond(function () {
        return [200, mockResponseData]
      });

      WeatherFetchingService.findConditions(selectedCity);

      $httpBackend.flush();
    }));

    it('should set the conditions on the service  ', function () {
      expect(WeatherFetchingService.conditions).toEqual({"foo": 2})
    });

    it('should log the results out', function () {
      expect($log.debug).toHaveBeenCalledWith('findConditions', mockResponseData);
    });

  });

  describe('when the findConditons functions fails warn the user', function () {
    beforeEach(inject(function (JSONPCallService) {
      spyOn($window, 'alert');

      $httpBackend.whenJSONP(JSONPCallService.expectedCall).respond(404);

      WeatherFetchingService.findConditions(JSONPCallService.selectedCity);

      $httpBackend.flush()

    }));

    it('should throw an alert', function () {
      expect($window.alert).toHaveBeenCalledWith('There was and issue fetching the weather');
    });
  });


});
