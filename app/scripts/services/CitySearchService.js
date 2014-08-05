(function () {
  'use strict';

  function CityFinderService($http, $log, SearchURL) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.findCityInfo = function (q) {
      return $http.jsonp(SearchURL, {params: {query:q, cb: 'JSON_CALLBACK'}, headers: {"Content-Type": "application/json"} })
        .then ( function (response) {
          $log.debug('findCityInfo', response.data);
          return response.data.RESULTS;
      });
    }
  }

  function CitySearchProvider() {
    this.searchURL = null;

    this.setSearchURL = function (url) {
      this.searchURL = url;
    };

    this.$get = function ($http, $log) {
      var self = this;
      return {
        findCityInfo: function(q) {
          return $http.jsonp(self.searchURL, {params: {query:q, cb: 'JSON_CALLBACK'}, headers: {"Content-Type": "application/json"} })
            .then ( function (response) {
            $log.debug('findCityInfo', response.data);
            return response.data.RESULTS;
          });
        }
      }
    }
  }

  angular
    .module('cityFinder', [])
    .provider('CitySearchService', CitySearchProvider);
//    .service('CityFinderService', CityFinderService );

})();


