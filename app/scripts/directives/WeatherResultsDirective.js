'use strict';

angular
  .module('weatherResults', ['time.filters'])
  .directive('weatherResults', function ($window) {
    return {
      scope: {
        searchResults: '='
      },
      replace: true,
      template: [
        '<div>',
        '<div class="row marketing" ng-if="searchResults">',
          '<table class="table">',
            '<tbody>',
              '<tr>',
                '<td>',
                  '<img ng-src="{{searchResults.icon_url}}">',
                '</td>',
                  '<td>',
                    '<h3>{{searchResults.display_location.full}}</h3>',
                  '</td>',
                '</tr>',
                '<tr>',
                  '<td>Last Updated</td>',
                  '<td id="local_epoch">{{searchResults.local_epoch | relativeTime}}</td>',
                '</tr>',

                '<tr>',
                  '<td>Temp F</td>',
                  '<td id="temp_f">{{searchResults.temp_f}}&deg;</td>',
                '</tr>',
                '<tr>',
                  '<td>Temp C</td>',
                  '<td id="temp_c">{{searchResults.temp_c}}&deg;</td>',
                '</tr>',
              '</tbody>',
            '</table>',
          '</div>',
        '</div>']
        .join(''),
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.on('click', function() {
          $window.alert(scope.searchResults.weather);
        })
      }
    };
  });
