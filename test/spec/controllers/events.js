'use strict';

describe('Controller: eventsCtrl', function () {

    // load the controller's module
    beforeEach(module('cloudifyWriteYourOwnUiDemoApp'));

    var eventsCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        eventsCtrl = $controller('EventsCtrl', {
            $scope: scope
        });
    }));

    it('should exist', inject(function () {
        expect(!!eventsCtrl).toBe(true);
    }));
});
