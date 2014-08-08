'use strict';

describe('Filter: RelativeTime', function () {

  // load the filter's module
  beforeEach(module('time.filters'));

  // initialize a new instance of the filter before each test
  var time;
  var now;

  beforeEach(inject(function ($filter) {
    time = $filter('relativeTime');
    now = moment();
  }));

  it('should display "a few seconds ago" when the epoch time is now', function () {
    expect(time(now)).toBe('a few seconds ago')
  });

  it('should display "2 minutes ago" when 2 minutes from now', function () {
    var twoMinAgo = now.subtract('minutes', 2);
    expect(time(twoMinAgo)).toBe('2 minutes ago');
  });

  it('should display "3 hours ago"', function () {
    var threeHoursAgo = now.subtract('hour', 3);
    expect(time(threeHoursAgo)).toBe('3 hours ago');
  });






});
