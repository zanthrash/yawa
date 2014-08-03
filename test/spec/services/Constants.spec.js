'use strict';

describe('Service: Constants', function () {

  /**
   * Constants and values are very similar.  The main difference is that constants can be injected into the app
   * config to be used in providers along with all the other service artifacts, and that constants are be treated as immutable data
   * even though they can be mutated.
   *
   * When testing constants you want to mainly ensure no one else changes the constants under you.
   * The test are a contract to ensure the constants don't change
   */


  // load the service's module
  beforeEach(module('constants'));

  describe('SearchURL', function () {
    it('should return the url for searching for cities', inject(function (SearchURL) {
      expect(SearchURL).toBe('http://autocomplete.wunderground.com/aq') ;
    }));
  });

  describe('BaseApiURL', function () {
    it('should return the base url for fething the weather', inject(function (BaseApiURL) {
      expect(BaseApiURL).toBe('http://api.wunderground.com/api/');
    }));
  });

  describe('ConditionURL', function () {
    it('should return the url fragment for the conditions api', inject(function (ConditionURL) {
      expect(ConditionURL).toBe('/conditions')
    }));
  });

});
