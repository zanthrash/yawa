(function () {
  'use strict';

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

})();


