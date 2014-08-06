(function () {

  function JSONPCallService (ApiKey) {
    var JSONPCallService = {};

    JSONPCallService.selectedCity = {l: "/q/zmw:94125.1.99999"};

    JSONPCallService.expectedCall = [
      'http://api.wunderground.com/api/',
      ApiKey.wu,
      '/conditions',
      JSONPCallService.selectedCity.l,
      '.json?callback=JSON_CALLBACK'
    ].join('');

    JSONPCallService.mockResponse = {"current_observation":{"foo": 2} };
    return JSONPCallService
  }

  angular
    .module('weatherFetchingMocks', [])
    .value('ApiKey', {'wu': '1234'})
    .factory('JSONPCallService', JSONPCallService)

})();
