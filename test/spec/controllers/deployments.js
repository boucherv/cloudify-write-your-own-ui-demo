'use strict';

describe('Controller: deploymentsCtrl', function () {

    // load the controller's module
    beforeEach(module('cloudifyWriteYourOwnUiDemoApp'));

    var deploymentsCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        deploymentsCtrl = $controller('DeploymentsCtrl', {
            $scope: scope
        });
    }));

    it('should exist', inject(function () {
        expect(!!deploymentsCtrl).toBe(true);
    }));
});
