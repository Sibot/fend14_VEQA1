'use strict';

angular.module('fend14Veqa1')
  .controller('ContactCtrl', function ($scope) {
    $scope.contacts = [
      {
        'title': 'Phone',
        'description': '08009990009'
      },
      {
        'title': 'Cell',
        'description': '+47(0)700090808980'
      },
      {
        'title': 'Twitter',
        'description': '@TobAxe'
      },
      {
        'title': 'Email',
        'description': 'front@end.com'
      },
      {
        'title': 'WWW',
        'description': '//www.tobis.se'
      }
    ];
    angular.forEach($scope.skills, function (skill) {
      skill.rank = Math.random();
    });
  });
