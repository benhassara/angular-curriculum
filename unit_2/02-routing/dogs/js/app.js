angular.module('routingApp', ['ngRoute'])

  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/dogs', {
        templateUrl: 'partials/dogs.html',
        controller: 'DogsController'
      })
      .otherwise('/');

    // removes the # from routes in the address bar
    // $locationProvider.html5Mode(true);
  });
