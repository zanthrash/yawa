(function () {
  'use strict';

  function RelativeTime () {
    return function (input) {
      return  moment(input).fromNow();
    };
  }

  angular
    .module('time.filters', [])
    .filter('relativeTime',  RelativeTime);

})();

