'use strict';

ddescribe('Service: apiKey for wunderground', function () {

  // load the service's module
  beforeEach(module('apiKey.value'));

  // inject the value and set it to a local variable
  var apiKey;
  beforeEach(
    inject(
      function (_ApiKey_) {
        apiKey = _ApiKey_;
      }
    )
  );

  it('should be initialized to undefined', function () {
    expect(apiKey.wu).toBeUndefined()
  });

  it('should return the set value after setting it', function () {
    apiKey.wu = '12345abc'

    // reinject to test that singleton has changed
    inject(function(ApiKey) {
      expect(ApiKey.wu).toBe('12345abc');
    });
  });

});
