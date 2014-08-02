(function () {

  'use strict';

  function SearchController ($http, $log, ApiKey, SearchURL, BaseApiURL, ConditionURL) {

    var self = this;
    self.selectedCity = {};
    self.conditions = undefined;
    self.apiKey = ApiKey.wu;

    this.search = function (q) {
      return $http.jsonp(SearchURL, {params: {query:q, cb: 'JSON_CALLBACK'}, headers: {"Content-Type": "application/json"} })
        .then ( function (response) {
        $log.debug(response.data);
        return response.data.RESULTS;
      })
    };

    this.fetchCityWeather = function () {
      var key = ApiKey.wu;
      var fetchUrl = [BaseApiURL, key, ConditionURL, this.selectedCity.l,'.json'].join('');
      return $http.jsonp(fetchUrl, {params: {callback: 'JSON_CALLBACK'}, headers: {"Content-Type": "application/json"}})
        .then( function (response) {
          self.conditions = response.data.current_observation;
          $log.debug(response.data);
        });

    }
  }

  angular
    .module('search.controller', ['mgcrea.ngStrap', 'apiKey.value', 'constants'])
    .controller('SearchCtrl', SearchController);


})();

