'use strict';

describe('Controller: blueprintsCtrl', function () {

    // load the controller's module
    beforeEach(module('cloudifyWriteYourOwnUiDemoApp'));

    var blueprintsCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        blueprintsCtrl = $controller('BlueprintsCtrl', {
            $scope: scope
        });
    }));

    it('should exist', inject(function () {
        expect(!!blueprintsCtrl).toBe(true);
    }));
});
