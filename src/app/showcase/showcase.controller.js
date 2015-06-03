'use strict';

angular.module('fend14Veqa1')
  .controller('ShowcaseCtrl', function ($scope) {
  $scope.showcase = [
    {
      'title': 'BRF Staren1',
      'url': 'http://staren1.se/',
      'description': 'A site Im going to replace soon!'
    },
    {
      'title': 'Megaptera',
      'url': 'http://megaptera.se/',
      'description': 'Working on a site for a friend'
    },
    {
      'title': 'Offerta.se',
      'url': 'http://offerta.se/',
      'description': 'The place I&apos;m working at currently.'
    },
    {
      'title': 'My own site',
      'url': 'http://www.tobis.se',
      'description': 'Made with love and git.'
    }
  ];
  angular.forEach($scope.showcase, function(item) {
    item.rank = Math.random();
  });
});
