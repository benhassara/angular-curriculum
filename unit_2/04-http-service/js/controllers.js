angular.module('httpApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope', '$http'];

function MainCtrl($scope, $http) {
  $http.get('https://api.github.com/zen')
    .then(function(data) {
      $scope.zenData = data.data;
    });

  $http.get('./itunes.json')
    .then(function(data) {
      $scope.songs = data.data.results;
    });
}
