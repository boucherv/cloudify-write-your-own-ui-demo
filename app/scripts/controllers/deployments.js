'use strict';

/**
 * @ngdoc function
 * @name cloudifyWriteYourOwnUiDemoApp.controller:deploymentsCtrl
 * @description
 * # deploymentsCtrl
 * Controller of the cloudifyWriteYourOwnUiDemoApp
 */
angular.module('cloudifyWriteYourOwnUiDemoApp')
    .controller('DeploymentsCtrl', function ($scope, cloudifyClient) {

        function populateExecutions() {
            cloudifyClient.executions.list('', 'status,blueprint_id,deployment_id,workflow_id', function (err, response, body) {
                var executions = {};
                var list = JSON.parse(body);
                var i;
                for (i in list) {
                    var item = list[i];
                    if (item.status !== 'terminated') {
                        executions[item.deployment_id] = item;
                    }
                }

                for (i in $scope.deployments) {
                    var d = $scope.deployments[i];
                    if (executions.hasOwnProperty(d.id)) {
                        d.current_execution = executions[d.id];
                    }
                }

            });
        }

        cloudifyClient.deployments.list('id,blueprint_id', function (err, response, body) {
            $scope.deployments = JSON.parse(body);
            populateExecutions();
        });
    });
