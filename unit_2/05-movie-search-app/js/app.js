angular.module('movieSearchApp', ['ngRoute'])

  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'SearchCtrl'
      })
      .when('/search', {
        templateUrl: 'partials/results.html',
        controller: 'SearchResultsCtrl'
      })
      .when('/details/:imdbID', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsCtrl'
      })
      .otherwise({redirectTo: '/'});
  });
