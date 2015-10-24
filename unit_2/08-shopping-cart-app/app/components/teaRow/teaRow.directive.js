(function() {
  'use strict';

  angular.module('app.components.teaRow')
    .directive('teaRow', teaRowDirective);

  function teaRowDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/teaRow/teaRow.html'
    };
  }
})();
