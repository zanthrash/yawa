(function () {

  'use strict';

  function WeatherInterceptor ($log, $q, $window, BaseApiURL) {
    var Interceptor = {};

    Interceptor.isWeatherApiResponse= function(url) {
      return url.indexOf(BaseApiURL) > -1;
    };

    Interceptor.request = function (config) {
      $log.debug("Interceptor.request", config);
      return config;
    };

    Interceptor.responseError = function (rejection) {
      $log.debug("Interceptor.responseError", rejection);
      return $q.reject(rejection);
    };




    Interceptor.response = function (response) {

      $log.debug("Interceptor.response", response);

      if (Interceptor.isWeatherApiResponse(response.config.url)) {
        if(response.data.response && response.data.response.error) {
          $window.alert(response.data.response.error.description)
        }
      }

      return response;
    };


    return Interceptor
  }

  function AddInterceptor ($httpProvider) {
    $httpProvider.interceptors.push('weatherInterceptorService');
  }

  angular
    .module('weatherInterceptor', ['constants'])
    .factory('weatherInterceptorService', WeatherInterceptor)
    .config(AddInterceptor);
})();

