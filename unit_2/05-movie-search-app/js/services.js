angular.module('movieSearchApp')

  .factory('moviesFact', moviesFact)
  .factory('router', router);

moviesFact.$inject= ['$http'];
router.$inject = ['$route', '$location'];

function moviesFact($http) {
  var _searchTerm = '';
  var _searchResults = [];

  var obj = {};

  obj.searchTitle = function(query) {
    $http.get('http://www.omdbapi.com/?s=' + query)
      .then(function(response) {
        _searchTerm = query;
        _searchResults = response.data.Search;
      });
  };

  obj.getDetails = function(id) {
    return $http.get('http://www.omdbapi.com/?i=' + id);
  };

  obj.getResults = function() {
    return _searchResults;
  };

  obj.getQuery = function() {
    return _searchTerm;
  };

  return obj;
}

function router($route, $location) {

  var obj = {};

  obj.search = function(term) {
    $route.updateParams({query: term});
    $location.path('/search');
  };

  obj.details = function(id) {
    $route.updateParams({imdbID: id});
    $location.path('/details/' + id);
  };

  return obj;
}
