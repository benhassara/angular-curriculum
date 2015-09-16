angular.module('portfolio', ['ngRoute'])

  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      })
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/bio', {
        templateUrl: '/partials/bio.html',
        controller: 'BioCtrl'
      })
      .when('/resume', {
        templateUrl: '/partials/resume.html',
        controller: 'ResumeCtrl'
      })
      .otherwise('/');
  });
