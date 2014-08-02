(function () {
  'use strict';

  angular.module('constants', [])
    .constant('SearchURL', 'http://autocomplete.wunderground.com/aq')
    .constant('BaseApiURL', 'http://api.wunderground.com/api/')
    .constant('ConditionURL', '/conditions');
})();


