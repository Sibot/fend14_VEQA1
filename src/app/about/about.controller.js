'use strict';

angular.module('fend14Veqa1')
    .controller('AboutCtrl', function ($scope) {
    $scope.skills = [
      {
        'title': 'Javascript',
        'description': 'Javascript is something I love!',
      },
      {
        'title': 'CSS',
        'description': 'I love CSS',
      },
      {
        'title': 'HTML5',
        'description': 'The foundation. No HTML, no webapp!',
      },
      {
        'title': 'Yeoman',
        'description': 'The toolbox.',
      },
      {
        'title': 'Gulp',
        'description': 'Make things happen!',
      },
      {
        'title': 'Sass',
        'description': 'Add a layer of functionality on your CSS',
      },
      {
        'title': 'Node',
        'description': 'The Javascript backend.',
      }
    ];
    angular.forEach($scope.skills, function (skill) {
        skill.rank = Math.random();
    });
});
