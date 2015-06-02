'use strict';

describe('Controller: mainCtrl', function () {

    // load the controller's module
    beforeEach(module('cloudifyWriteYourOwnUiDemoApp'));

    var mainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl', {
            $scope: scope
        });
    }));

    it('should exist', inject(function () {
        expect(!!mainCtrl).toBe(true);
    }));
});
