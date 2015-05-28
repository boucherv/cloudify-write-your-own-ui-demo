'use strict';

angular.module('cloudifyWriteYourOwnUiDemoApp')
    .controller('BlueprintsCtrl', function ($scope, cloudifyClient) {


        cloudifyClient.blueprints.list('id,created_at', function (err, response, body) {
            if ( typeof(body) === 'string' ){
                body = JSON.parse(body);
            }
            $scope.blueprints = body;
            console.log('these are the blueprints',typeof(body));
        });

    });
