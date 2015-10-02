angular.module('movieSearchApp', ['ngRoute'])

  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../partials/home.html',
        controller: 'SearchCtrl'
      })
      .when('/search', {
        templateUrl: '../partials/results.html',
        controller: 'SearchResultsCtrl'
      });
  });
