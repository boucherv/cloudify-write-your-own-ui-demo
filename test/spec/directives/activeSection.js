'use strict';

describe('Directive: activeSection', function () {

  // load the directive's module
  beforeEach(module('cloudifyWriteYourOwnUiDemoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  var setup = inject(function( $compile ){
    element = angular.element('<active-section></active-section>');
    element = $compile(element)(scope);
    scope.$digest();
  });

  it('should make hidden element visible', inject(function () {
    setup();
    expect(element.text()).toBe('this is the activeSection directive');
  }));
});
