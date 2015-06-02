'use strict';

describe('Controller: blueprintCtrl', function () {

    // load the controller's module
    beforeEach(module('cloudifyWriteYourOwnUiDemoApp'));

    var blueprintCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        blueprintCtrl = $controller('BlueprintCtrl', {
            $scope: scope
        });
    }));

    it('should exist', inject(function () {
        expect(!!blueprintCtrl).toBe(true);
    }));
});
