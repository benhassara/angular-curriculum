angular.module('movieSearchApp')

  .controller('SearchCtrl', SearchCtrl)
  .controller('SearchResultsCtrl', SearchResultsCtrl)
  .controller('DetailsCtrl', DetailsCtrl);

SearchCtrl.$inject = ['$scope', 'moviesFact', 'router'];
SearchResultsCtrl.$inject = ['$scope', 'moviesFact', 'router'];
DetailsCtrl.$inject = ['$scope', 'moviesFact', '$routeParams'];

function SearchCtrl($scope, moviesFact, router) {

  $scope.search = function() {
    moviesFact.searchTitle($scope.query)
      .then(function(response) {
        moviesFact.setResults(response.data.Search);
        moviesFact.setQuery($scope.query);
        router.search($scope.query);
      });
  };
}

function SearchResultsCtrl($scope, moviesFact, router) {

  $scope.results = moviesFact.getResults();
  $scope.query = moviesFact.getQuery();

  $scope.getDetails = function(event) {

    var imdbID = event.target.dataset.imdbid;
    router.details(imdbID);
  };
}

function DetailsCtrl($scope, moviesFact, $routeParams) {
  moviesFact.getDetails($routeParams.imdbID)
    .then(function(result) {
      console.log(result);
      $scope.movie = result.data;
    });
}
