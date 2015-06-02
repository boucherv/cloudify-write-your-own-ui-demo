'use strict';

describe('Controller: deploymentCtrl', function () {

    // load the controller's module
    beforeEach(module('cloudifyWriteYourOwnUiDemoApp'));

    var deploymentCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        deploymentCtrl = $controller('DeploymentCtrl', {
            $scope: scope
        });
    }));

    it('should exist', inject(function () {
        expect(!!deploymentCtrl).toBe(true);
    }));
});
