var app = angular.module('myApp', ['ngSanitize']);

function testControllerFn($scope) {
  $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
  $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  $scope.dupes = [1,1,2,5,6,9,9,9];
  $scope.keys = {red: 1, blue: 2, green: 3, yellow: 4};
}

angular.module('myApp').controller('testController', ['$scope', testControllerFn]);
