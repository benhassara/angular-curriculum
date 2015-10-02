angular.module('movieSearchApp')

  .controller('SearchCtrl', SearchCtrl)
  .controller('SearchResultsCtrl', SearchResultsCtrl);

SearchCtrl.$inject = ['$scope', 'moviesFact', 'router'];
SearchResultsCtrl.$inject = ['$scope', 'moviesFact', 'router'];

function SearchCtrl($scope, moviesFact, router) {

  $scope.search = function() {
    moviesFact.searchTitle($scope.query);
    router.search($scope.query);
  };
}

function SearchResultsCtrl($scope, moviesFact, router) {

  $scope.results = moviesFact.getResults();
  $scope.query = moviesFact.getQuery();
}
