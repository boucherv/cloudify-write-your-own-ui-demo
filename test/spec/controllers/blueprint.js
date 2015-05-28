'use strict';

describe('Controller: blueprintCtrl', function () {

  // load the controller's module
  beforeEach(module('cloudifyWriteYourOwnUiDemoApp'));

  var blueprintCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    blueprintCtrl = $controller('blueprintCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', inject(function () {
    expect(scope.awesomeThings.length).toBe(3);
  }));
});
