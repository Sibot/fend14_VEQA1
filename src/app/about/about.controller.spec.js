'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('fend14Veqa1'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define more than 5 skills', inject(function($controller) {
    expect(scope.skills).toBeUndefined();

    $controller('AboutCtrl', {
      $scope: scope
    });

    expect(angular.isArray(scope.skills)).toBeTruthy();
    expect(scope.skills.length > 5).toBeTruthy();
  }));
});
