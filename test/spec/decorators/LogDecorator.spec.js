'use strict';

describe('Decorator: Log', function () {

  beforeEach( module('log.decorator'));

  it('should use the decorator', inject(function ($log) {

    // Need to call this to get the logs array to be added in the angular.mocks.$LogProvider
    $log.reset();
    $log.debug('foo');

    expect($log.debug.logs[0]).toMatch( /\d+:\d+:\d+ [a,p]m - foo/ )
  }));
});