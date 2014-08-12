(function () {
  'use strict';

  angular
    .module('log.decorator', [])
    .config(function ($provide) {
      $provide.decorator('$log', function ($delegate) {

        $delegate.debug = enhanceDebug($delegate.debug);

        function enhanceDebug(fn) {
          return function () {
            var args = [].slice.call(arguments);
            var now = moment().format('h:mm:ss a');
            args[0] = now + " - " + args[0];

            fn.apply(this, args);
          }
        }

        return $delegate;
      });
    });

})();
