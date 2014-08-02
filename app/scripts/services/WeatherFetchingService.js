(function () {
  'use strict';

  function WeatherService ($http, $log, ApiKey, BaseApiURL, ConditionURL) {

    var WeatherService = {};

    WeatherService.conditions = undefined;

    WeatherService.findConditions = function (selectedCity) {
      var key = ApiKey.wu;
      var fetchUrl = [BaseApiURL, key, ConditionURL, selectedCity.l, '.json'].join('');
      return $http.jsonp(fetchUrl, {params: {callback: 'JSON_CALLBACK'}, headers: {"Content-Type": "application/json"}})
        .then( function (response) {
          WeatherService.conditions = response.data.current_observation;
          $log.debug(response.data);
        });
    };

    return WeatherService;
  }

  angular.module('weatherFetching', ['apiKey.value', 'constants'])
    .factory('WeatherFetchingService', WeatherService);

})();
