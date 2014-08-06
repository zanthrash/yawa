(function () {
  'use strict';

  function WeatherService ($http, $window, $log, ApiKey, BaseApiURL, ConditionURL) {

    var WeatherService = {};

    WeatherService.conditions = undefined;

    WeatherService.findConditions = function (selectedCity) {
      var key = ApiKey.wu;
      var fetchUrl = [BaseApiURL, key, ConditionURL, selectedCity.l, '.json'].join('');
      return $http.jsonp(fetchUrl, {params: {callback: 'JSON_CALLBACK'}, headers: {"Content-Type": "application/json"}})
        .then(
        function (response) {
          $log.debug('findConditions', response.data);
          WeatherService.conditions = response.data.current_observation;
        },
        function (response) {
          $window.alert('There was and issue fetching the weather');
        }
      );
    };

    return WeatherService;
  }

  angular
    .module('weatherFetching', ['apiKey.value', 'constants'])
    .factory('WeatherFetchingService', WeatherService);

})();
