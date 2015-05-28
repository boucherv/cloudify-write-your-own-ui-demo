'use strict';

/**
 * @ngdoc directive
 * @name cloudifyWriteYourOwnUiDemoApp.directive:activeSection
 * @description
 * # activeSection
 */
angular.module('cloudifyWriteYourOwnUiDemoApp')
  .directive('activeSection', function ( $location, $log, $timeout, $rootScope ) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
          function updateActiveSection() {
              element.find('li').removeClass('active');
              element.find('a[ng-href*="' + $location.path() + '"]').parent().addClass('active');
          }

          $rootScope.$on('$routeChangeSuccess', updateActiveSection);
          //$log.info('this is path',$location.path());

      }
    };
  });
