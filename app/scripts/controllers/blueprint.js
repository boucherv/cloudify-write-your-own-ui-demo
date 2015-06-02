'use strict';

/**
 * @ngdoc function
 * @name cloudifyWriteYourOwnUiDemoApp.controller:blueprintCtrl
 * @description
 * # blueprintCtrl
 * Controller of the cloudifyWriteYourOwnUiDemoApp
 */
angular.module('cloudifyWriteYourOwnUiDemoApp')
    .controller('BlueprintCtrl', function ($scope, $routeParams, cloudifyClient, $log ) {
        $scope.blueprintId = $routeParams.blueprint_id;
        cloudifyClient.blueprints.get($routeParams.blueprint_id, null, function(err, response, body){
            $scope.blueprint = JSON.parse(body);

            $scope.deploy = { 'name' : $scope.blueprint.id, inputs: '' };

            var inputs = {};
            for ( var e in $scope.blueprint.plan.inputs ){
                var item = $scope.blueprint.plan.inputs[e];
                inputs[e] = item.default || null;
            }

            console.log(inputs);
            $scope.deploy.inputs = JSON.stringify(inputs, {}, 4);

        });


        $scope.deployBlueprint = function(){
            $scope.deploy.error = null;
            $scope.deploy.deployed = null;
            try {
                $log.info('deploying...');
                cloudifyClient.deployments.create($scope.blueprintId, $scope.deploy.name, JSON.parse($scope.deploy.inputs), function (err, response, body) {
                    if ( !!body.error_code ){
                        $scope.deploy.error = body.message;
                    }else{
                        $scope.deploy.success = body;
                    }
                });
            }catch(e){
                $scope.deploy.error = 'inputs is not a valid json ' + e.message;
            }
        };
    });
