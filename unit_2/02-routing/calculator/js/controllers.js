angular.module('calculator')

  .controller('HomeCtrl', function($scope) {
    $scope.heading = 'Route Calculator';
    $scope.description = 'This page will do simple calculations based on what you add to the end of the URL in your address bar.';
    $scope.examples = [
      {
        title: 'Addition',
        url: '/add/2/3',
        ans: 5
      },
      {
        title: 'Subtraction',
        url: '/subtract/10/2',
        ans: 8
      },
      {
        title: 'Division',
        url: '/divide/15/3',
        ans: 5
      },
      {
        title: 'Multiplication',
        url: '/multiply/3/2',
        ans: 6
      }
    ];
  })

  .controller('AddCtrl', function($scope, $location) {

  })

  .controller('SubCtrl', function($scope, $location) {

  })

  .controller('DivideCtrl', function($scope, $location) {

  })

  .controller('MultiplyCtrl', function($scope, $location) {

  });
