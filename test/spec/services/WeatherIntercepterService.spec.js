'use strict';

describe('Service: weatherInterceptorService', function () {

  // load the service's module
  beforeEach(module('weatherInterceptor'));

  // instantiate service
  var weatherInterceptorService;
  var $httpBackend;
  var $window;
  var BaseApiURL;


  beforeEach(inject(function (_weatherInterceptorService_, _$httpBackend_, _$window_, _BaseApiURL_) {
    $httpBackend = _$httpBackend_;
    $window = _$window_;
    BaseApiURL = _BaseApiURL_;
    weatherInterceptorService = _weatherInterceptorService_;
  }));

  it('should exist when injected', function () {
    expect(!!weatherInterceptorService).toBe(true);
  });

  describe('intercepting a response with an error from the api', function () {
    beforeEach(function () {
      spyOn($window, 'alert');

      var response = {
        'config': {'url': BaseApiURL},
        'data': {
          'response': {'error': {'description': 'big error'}}
        }
      };

      weatherInterceptorService.response(response)
    });

    it('should display the error to the user', function () {
      expect($window.alert).toHaveBeenCalledWith('big error');
    });
  });


  describe('intercepting a response without and error from the api', function () {

    beforeEach(function () {
      spyOn($window, 'alert');

      var response = {
        'config': {'url': BaseApiURL},
        'data': {
          'response': {}
        }
      };

      weatherInterceptorService.response(response);
    });

    it('should not alert the user if there is no error', function () {
      expect($window.alert).not.toHaveBeenCalled()
    });

  });

  describe('intercepting a response for a NON api based url', function () {

    beforeEach(function () {
      spyOn($window, 'alert');
      var response = {
        'config': {'url': 'http://non_api.com'},
        'data': {
          'response': {}
        }
      };

      weatherInterceptorService.response(response);
    });

    it('should not alert the user if there is no error', function () {
      expect($window.alert).not.toHaveBeenCalled()
    });

  });


});
