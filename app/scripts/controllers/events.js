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
        if ( !executionId ){
            executionId = null;
        }

        cloudifyClient.events.get( executionId, 0, 5000, true, function(err, response,body){
                $scope.events = body.events;
        });

        if ( executionId ) {
            cloudifyClient.executions.get(executionId, 'blueprint_id,deployment_id,workflow_id', function (err, response, body) {

                    $scope.execution = JSON.parse(body);
                    console.log($scope.execution);



            });
        }
    });
