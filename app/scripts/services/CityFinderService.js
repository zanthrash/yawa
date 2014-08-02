(function () {
  'use strict';

  function CityFinderService($http, $log, SearchURL) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.findCityInfo = function (q) {
      return $http.jsonp(SearchURL, {params: {query:q, cb: 'JSON_CALLBACK'}, headers: {"Content-Type": "application/json"} })
        .then ( function (response) {
          $log.debug(response.data);
          return response.data.RESULTS;
      });
    }
  }

  angular
    .module('cityFinder', [])
    .service('CityFinderService', CityFinderService );

})();


