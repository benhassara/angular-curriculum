angular.module('contacts', ['ngRoute'])

  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: AddContacts
      })
      .when('/:index', {
        templateUrl: 'partials/details.html',
        controller: DetailsCtrl
      })
      .otherwise('/');
  });
