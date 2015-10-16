angular.module('movieSearchApp')

  .factory('moviesFact', moviesFact)
  .factory('router', router);

moviesFact.$inject= ['$http'];
router.$inject = ['$route', '$location'];

function moviesFact($http) {
  var _searchTerm = '';
  var _searchResults = [];
  var _rottenTomatoes = false;

  var obj = {};

  obj.searchTitle = function(query, rt) {
    var url = 'http://www.omdbapi.com/?s=' + query;
    _rottenTomatoes = rt;
    return $http.get(url);
  };

  obj.getDetails = function(id, rt) {
    var url = 'http://www.omdbapi.com/?plot=full&i=' + id;
    if (rt) {url += '&tomatoes=true';}
    return $http.get(url);
  };

  obj.getTomatoes = function() {
    return _rottenTomatoes;
  };

  obj.getResults = function() {
    return _searchResults;
  };

  obj.setResults = function(results) {
    _searchResults = results;
  };

  obj.getQuery = function() {
    return _searchTerm;
  };

  obj.setQuery = function(query) {
    _searchTerm = query;
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
    $location.path('/details/' + id);
  };

  return obj;
}
