angular.module('calculator')
  .controller('HomeCtrl', HomeCtrl)
  .controller('AddCtrl', AddCtrl)
  .controller('SubCtrl', SubCtrl)
  .controller('DivideCtrl', DivideCtrl)
  .controller('MultiplyCtrl', MultiplyCtrl);

// inject dependencies
HomeCtrl.$inject = ['$scope', 'signs'];
AddCtrl.$inject = ['$scope', '$routeParams', 'signs'];
SubCtrl.$inject = ['$scope', '$routeParams', 'signs'];
DivideCtrl.$inject = ['$scope', '$routeParams', 'signs'];
MultiplyCtrl.$inject = ['$scope', '$routeParams', 'signs'];

/** landing page data */
function HomeCtrl($scope, signs) {
  $scope.heading = 'Route Calculator';
  $scope.description = 'This page will do simple calculations based on what you add to the end of the URL in your address bar.';
  $scope.examples = [
    {
      title: 'Addition',
      sign: signs.add,
      url: '/add/2/3',
      ans: '2 + 3 = 5'
    },
    {
      title: 'Subtraction',
      sign: signs.subtract,
      url: '/subtract/10/2',
      ans: '10 - 2 = 8'
    },
    {
      title: 'Division',
      sign: signs.divide,
      url: '/divide/15/3',
      ans: '15 ÷ 3 = 5'
    },
    {
      title: 'Multiplication',
      sign: signs.multiply,
      url: '/multiply/3/2',
      ans: '3 × 2 = 6'
    }
  ];
}

/** Addition for the /add/ route */
function AddCtrl($scope, $routeParams, signs) {
  $scope.input = {
    num1: +$routeParams.num1,
    num2: +$routeParams.num2
  };
  $scope.total = $scope.input.num1 + $scope.input.num2;
  $scope.sign = signs.add;
}

/** Subtraction for /sub/ route */
function SubCtrl($scope, $routeParams, signs) {
  $scope.input = {
    num1: +$routeParams.num1,
    num2: +$routeParams.num2
  };
  $scope.total = $scope.input.num1 - $scope.input.num2;
  $scope.sign = signs.subtract;
}

/** Division for /divide/ route */
function DivideCtrl($scope, $routeParams, signs) {
  $scope.input = {
    num1: +$routeParams.num1,
    num2: +$routeParams.num2
  };
  $scope.total = $scope.input.num1 / $scope.input.num2;
  $scope.sign = signs.divide;
}

/** Multiply for /multiply/ route */
function MultiplyCtrl($scope, $routeParams, signs) {
  $scope.input = {
    num1: +$routeParams.num1,
    num2: +$routeParams.num2
  };
  $scope.total = $scope.input.num1 * $scope.input.num2;
  $scope.sign = signs.multiply;
}
