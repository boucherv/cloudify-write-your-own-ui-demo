'use strict';

/**
 * @ngdoc function
 * @name cloudifyWriteYourOwnUiDemoApp.controller:deploymentCtrl
 * @description
 * # deploymentCtrl
 * Controller of the cloudifyWriteYourOwnUiDemoApp
 */
angular.module('cloudifyWriteYourOwnUiDemoApp')
  .controller('DeploymentCtrl', function ($scope, $routeParams, cloudifyClient) {

        var deploymentId = $routeParams.deployment_id;

        function getWorkflowByName ( name ){
            if ( $scope.deployment ) {
                for (var i in $scope.deployment.workflows) {
                    if ($scope.deployment.workflows[i].name === name) {
                        return $scope.deployment.workflows[i];
                    }

                }
            }
            return null;
        }

        $scope.workflow = {};
        cloudifyClient.deployments.get(deploymentId, null, function( err, response, body ){
            $scope.deployment = JSON.parse(body);
        });

        cloudifyClient.executions.list(deploymentId, 'id,status,blueprint_id,deployment_id,workflow_id', function(err, response,body){
            var executions = JSON.parse(body);
            console.log(executions);
            for ( var i in executions ){
                if ( executions[i].status !== 'terminated' ){
                    $scope.currentExecution = executions[i];
                    return;
                }
            }
        });

        $scope.$watch('workflow.name', function(){
            var wf = getWorkflowByName($scope.workflow.name);
            var params = {};
            if  ( !! wf ){ // construct the parameters field
                for ( var i in wf.parameters ){
                    params[i] = wf.parameters[i].default;
                }
            }
            $scope.workflow.parameters = JSON.stringify(params, {}, 4);
        });

        $scope.executeWorkflow = function(){
            $scope.workflow.error = null;
            $scope.workflow.success = null;
            try{
                cloudifyClient.executions.start(deploymentId, $scope.workflow.name, JSON.parse($scope.workflow.parameters), null, null, function(err, response, body){
                    $scope.currentExecution = body;
                    if ( !!body.error_code){
                        $scope.workflow.error = body.message;
                    }else{
                        $scope.workflow.success = body;
                    }
                });
            }catch(e){
                $scope.workflow.error = 'JSON is invalid : ' + e.message;
            }

        }

  });
