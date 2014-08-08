'use strict';

ddescribe('Directive: WeatherResults', function () {

  // load the directive's module
  beforeEach(module('weatherResults'));

  var element;
  var scope;
  var $window;

  beforeEach(inject(function ($rootScope, _$window_) {
    scope = $rootScope.$new();
    $window = _$window_;
  }));

  it('should not display the table if no search-results are set', inject(function ($compile) {

    element = angular.element('<weather-results search-results=""></weather-results>');
    element = $compile(element)(scope);

    scope.$digest();

    expect(element.children().length).toEqual(0);
  }));

  describe('when there are search results', function () {

    beforeEach(inject(function($compile) {
      spyOn($window, 'alert');

      scope.results = {
        'icon_url':'http://foo.com',
        'display_location': {'full':'Gothem'},
        'local_epoch': new Date().getTime(),
        'temp_f': '32',
        'temp_c': 0,
        'weather': 'sunny all day'
      };
      element = angular.element('<weather-results search-results="results"></weather-results>');
      element = $compile(element)(scope);

      scope.$digest();
    }));

    it('should display the table with the data', function () {
      expect(element.find('img').attr('ng-src')).toBe(scope.results.icon_url);
      expect(element.find('h3').html()).toBe(scope.results.display_location.full);
      expect(element.find('#local_epoch').html()).toBe('a few seconds ago');
      expect(element.find('#temp_f').html()).toMatch(scope.results.temp_f);
      expect(element.find('#temp_c').html()).toMatch(scope.results.temp_c);
    });

    it('should be clickable to show the weather summary', function () {
      element.triggerHandler('click');
      expect($window.alert).toHaveBeenCalledWith(scope.results.weather)
    });
  });
});
