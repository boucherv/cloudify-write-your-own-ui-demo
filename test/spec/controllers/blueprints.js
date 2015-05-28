'use strict';

describe('Controller: blueprintsCtrl', function () {

  // load the controller's module
  beforeEach(module('cloudifyWriteYourOwnUiDemoApp'));

  var blueprintsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    blueprintsCtrl = $controller('blueprintsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', inject(function () {
    expect(scope.awesomeThings.length).toBe(3);
  }));
});
