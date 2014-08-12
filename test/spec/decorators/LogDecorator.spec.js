'use strict';

ddescribe('Decorator: Log', function () {

  beforeEach( module('log.decorator'));

  it('should use the decorator', inject(function ($log) {

    $log.reset();
    $log.debug('foo');

    expect($log.debug.logs[0]).toMatch( /\d+:\d+:\d+ [a,p]m - foo/ )
  }));
});