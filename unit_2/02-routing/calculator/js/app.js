angular.module('calculator', ['ngRoute'])

  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      })
      .when('/add/:num1/:num2', {
        templateUrl: 'partials/ans.html',
        controller: 'AddCtrl'
      })
      .when('/subtract/:num1/:num2', {
        templateUrl: 'partials/ans.html',
        controller: 'SubCtrl'
      })
      .when('/divide/:num1/:num2', {
        templateUrl: 'partials/ans.html',
        controller: 'DivideCtrl'
      })
      .when('/multiply/:num1/:num2', {
        templateUrl: 'partials/ans.html',
        controller: 'MultiplyCtrl'
      })
      .otherwise('/');
  });
