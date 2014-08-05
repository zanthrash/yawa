(function () {
  'use strict';

  angular.module('log.decorator', [])
    .config(function ($provide) {
      $provide.decorator('$log', function ($delegate) {

        var origDebug = $delegate.debug;

        $delegate.debug = function() {

          var args = [].slice.call(arguments);
          var now = moment().format('h:mm:ss a')

          args[0] = now + " - " + args[0]

          origDebug.apply(null, args);
        };

        return $delegate;
      });
    });

})();
