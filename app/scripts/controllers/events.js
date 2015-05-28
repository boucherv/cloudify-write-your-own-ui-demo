'use strict';

/**
 * @ngdoc function
 * @name cloudifyWriteYourOwnUiDemoApp.controller:eventsCtrl
 * @description
 * # eventsCtrl
 * Controller of the cloudifyWriteYourOwnUiDemoApp
 */
angular.module('cloudifyWriteYourOwnUiDemoApp')

    .controller('EventsCtrl', function ($scope, cloudifyClient, $location ) {
        var executionId = $location.search().execution;
        cloudifyClient.events.get( executionId, 0, 10, true, function(err, response,body){
            $scope.events = body.events;
        });

        cloudifyClient.executions.get(executionId, 'blueprint_id,deployment_id,workflow_id', function( err, response, body){
            $scope.execution = JSON.parse(body);
            console.log($scope.execution);
        });
    });
