'use strict';

function ApiKeyController ($location, ApiKey) {
  var self = this;
  self.key = ApiKey;

  self.saveKey = function () {
    ApiKey.wu = self.key;
    $location.path('/');
  }
}

angular
  .module('apiKey.controller', ['apiKey.value'])
  .controller('ApiKeyCtrl', ApiKeyController);
