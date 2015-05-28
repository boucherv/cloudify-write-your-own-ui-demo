'use strict';

/**
 * @ngdoc overview
 * @name cloudifyWriteYourOwnUiDemoApp
 * @description
 * # cloudifyWriteYourOwnUiDemoApp
 *
 * Main module of the application.
 */
angular
    .module('cloudifyWriteYourOwnUiDemoApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'cloudifyjs'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/blueprints', {
                templateUrl: 'views/blueprints.html',
                controller: 'BlueprintsCtrl'
            })
            .when('/events', {
                templateUrl: 'views/events.html',
                controller: 'EventsCtrl'
            })
            .when('/blueprint/:blueprint_id', {
                templateUrl: 'views/blueprint.html',
                controller: 'BlueprintCtrl'
            })
            .when('/deployments',{
                templateUrl: 'views/deployments.html',
                controller: 'DeploymentsCtrl'
            })
            .when('/deployment/:deployment_id', {
                templateUrl: 'views/deployment.html',
                controller: 'DeploymentCtrl'
            })
            .otherwise({
                redirectTo: '/blueprints'
            });
    });
