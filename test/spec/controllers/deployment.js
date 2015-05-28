'use strict';

describe('Controller: deploymentCtrl', function () {

  // load the controller's module
  beforeEach(module('cloudifyWriteYourOwnUiDemoApp'));

  var deploymentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    deploymentCtrl = $controller('deploymentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', inject(function () {
    expect(scope.awesomeThings.length).toBe(3);
  }));
});
