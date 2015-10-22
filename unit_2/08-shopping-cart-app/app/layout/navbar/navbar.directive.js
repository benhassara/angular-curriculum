(function() {
  'use strict';

  angular.module('app.layout.navbar')
    .directive('navbar', navbarDirective);

  function navbarDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/layout/navbar/navbar.html'
    };
  }
})();
