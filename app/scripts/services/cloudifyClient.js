'use strict';

/**
 * @ngdoc service
 * @name cloudifyWriteYourOwnUiDemoApp.cloudifyClient
 * @description
 * # cloudifyClient
 * Factory in the cloudifyWriteYourOwnUiDemoApp.
 */
angular.module('cloudifyWriteYourOwnUiDemoApp')
  .factory('cloudifyClient', function ( CloudifyClient ) {
     return new CloudifyClient({'endpoint': '/cloudify'});
  });
